/**
 * This script uploads team photos from s:/ACM/allteams to Cloudinary.
 * 
 * Instructions:
 * 1. Install dependencies: npm install cloudinary
 * 2. Set environment variables:
 *    CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
 * 3. Run: node scripts/upload-teams.js
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const TEAMS_DIR = 's:/ACM/allteams';
const CLOUD_FOLDER = 'acm-svnit/teams';

// Role hierarchy configuration
const ROLES = [
  { name: 'Chairperson', count: 1 },
  { name: 'Vice Chairperson', count: 1 },
  { name: 'Secretary', count: 2 },
  { name: 'Treasurer', count: 2 },
  { name: 'Community Head', count: 1 },
  { name: 'Developer', count: 3 },
  { name: 'Problem Setter', count: 3 },
  { name: 'Designer', count: 2 },
  { name: 'Core Member', count: 3 },
];

// Special roles for 14-15 batch (11 members)
const ROLES_14_15 = [
  { name: 'Chairperson', count: 1 },
  { name: 'Vice Chairperson', count: 1 },
  { name: 'Secretary', count: 2 },
  { name: 'Treasurer', count: 1 },
  { name: 'Community Head', count: 1 },
  { name: 'Developer', count: 2 },
  { name: 'Designer', count: 1 },
  { name: 'Core Member', count: 2 },
];

async function uploadBatch(batchFolder) {
  const batchPath = path.join(TEAMS_DIR, batchFolder);
  if (!fs.lstatSync(batchPath).isDirectory()) return null;

  console.log(`\n--- Processing Batch: ${batchFolder} ---`);
  
  // Get all images and sort numerically
  const files = fs.readdirSync(batchPath)
    .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
    .sort((a, b) => parseInt(a) - parseInt(b));

  const batchResults = [];
  const rolesDef = batchFolder === 'core_14_15' ? ROLES_14_15 : ROLES;
  
  let currentFileIdx = 0;
  for (const roleDef of rolesDef) {
    for (let i = 0; i < roleDef.count; i++) {
      if (currentFileIdx >= files.length) break;

      const fileName = files[currentFileIdx];
      const filePath = path.join(batchPath, fileName);
      const publicId = `${batchFolder}_${fileName.split('.')[0]}`;

      process.stdout.write(`Uploading ${fileName} as ${roleDef.name}... `);

      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: `${CLOUD_FOLDER}/${batchFolder}`,
          public_id: publicId,
          overwrite: true,
          tags: [batchFolder, roleDef.name],
        });

        batchResults.push({
          id: publicId,
          batch: batchFolder.replace('core_', ''),
          role: roleDef.name,
          image: result.secure_url,
        });

        console.log('Done.');
      } catch (err) {
        console.error(`\nError uploading ${fileName}:`, err.message);
      }

      currentFileIdx++;
    }
  }

  return batchResults;
}

async function main() {
  if (!process.env.CLOUDINARY_URL) {
    console.error('Error: CLOUDINARY_URL is not set.');
    process.exit(1);
  }

  const folders = fs.readdirSync(TEAMS_DIR);
  let allResults = [];

  for (const folder of folders) {
    if (folder.startsWith('core_')) {
      const results = await uploadBatch(folder);
      if (results) allResults = [...allResults, ...results];
    }
  }

  // Save the mapping to a file
  const outputPath = path.join(__dirname, '../src/data/team-mapping.json');
  fs.writeFileSync(outputPath, JSON.stringify(allResults, null, 2));
  console.log(`\nSuccess! Mapping saved to ${outputPath}`);
}

main().catch(console.error);
