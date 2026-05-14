import { TeamMember } from "../types";

// Helper — gradient monogram avatar via ui-avatars (no cartoons, clean initials)
const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0EA5E9&color=ffffff&bold=true&size=256&font-size=0.38&rounded=true&format=svg`;

export const teamMembers: TeamMember[] = [
  // 2024-25
  { id: "1", name: "Aarav Sharma", role: "President", year: "2024-25", batch: "B.Tech CSE, 2025", bio: "Leading the chapter towards technical excellence. Passionate about scalable systems.", image: avatar("Aarav Sharma"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "2", name: "Priya Patel", role: "Vice President", year: "2024-25", batch: "B.Tech ECE, 2025", bio: "Ensuring smooth execution of all events. AI enthusiast.", image: avatar("Priya Patel"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "3", name: "Rohan Desai", role: "Technical Lead", year: "2024-25", batch: "B.Tech CSE, 2026", bio: "Architecting robust applications. Rust and Go aficionado.", image: avatar("Rohan Desai"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "4", name: "Ananya Iyer", role: "Technical Lead", year: "2024-25", batch: "B.Tech AI, 2026", bio: "Building open-source projects. Competitive programming lover.", image: avatar("Ananya Iyer"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "5", name: "Vikram Singh", role: "Design Lead", year: "2024-25", batch: "B.Tech Mech, 2026", bio: "Crafting beautiful UI/UX experiences. Figma is my playground.", image: avatar("Vikram Singh"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "6", name: "Kavya Reddy", role: "Events Lead", year: "2024-25", batch: "B.Tech Civil, 2026", bio: "Orchestrating our flagship hackathons. Management guru.", image: avatar("Kavya Reddy"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "7", name: "Arjun Mehta", role: "Content Lead", year: "2024-25", batch: "B.Tech CSE, 2026", bio: "Writing stories that matter. Tech blogger by night.", image: avatar("Arjun Mehta"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "8", name: "Neha Joshi", role: "Marketing Lead", year: "2024-25", batch: "B.Tech ECE, 2026", bio: "Growing our community reach. Social media strategist.", image: avatar("Neha Joshi"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "9", name: "Rahul Verma", role: "Treasurer", year: "2024-25", batch: "B.Tech EE, 2026", bio: "Managing the treasury with precision. Finance enthusiast.", image: avatar("Rahul Verma"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "10", name: "Sneha Gupta", role: "Secretary", year: "2024-25", batch: "B.Tech CSE, 2026", bio: "Keeping everything documented and organized. Operations manager.", image: avatar("Sneha Gupta"), github: "https://github.com", linkedin: "https://linkedin.com" },

  // 2023-24
  { id: "11", name: "Aditya Nair", role: "President", year: "2023-24", batch: "B.Tech CSE, 2024", bio: "Led the chapter to new heights. Currently SDE at Amazon.", image: avatar("Aditya Nair"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "12", name: "Riya Kapoor", role: "Vice President", year: "2023-24", batch: "B.Tech ECE, 2024", bio: "Spearheaded community outreach. Pursuing Masters.", image: avatar("Riya Kapoor"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "13", name: "Karan Agarwal", role: "Technical Lead", year: "2023-24", batch: "B.Tech CSE, 2025", bio: "Built our first hackathon portal. Cloud specialist.", image: avatar("Karan Agarwal"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "14", name: "Meera Menon", role: "Technical Lead", year: "2023-24", batch: "B.Tech AI, 2025", bio: "Organized our AI bootcamps. Data science expert.", image: avatar("Meera Menon"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "15", name: "Varun Das", role: "Design Lead", year: "2023-24", batch: "B.Tech Mech, 2025", bio: "Created the DotSlash 7.0 brand identity. Creative mind.", image: avatar("Varun Das"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "16", name: "Pooja Singh", role: "Events Lead", year: "2023-24", batch: "B.Tech Civil, 2025", bio: "Managed logistics for over 1000 participants.", image: avatar("Pooja Singh"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "17", name: "Tarun Kumar", role: "Content Lead", year: "2023-24", batch: "B.Tech EE, 2025", bio: "Wrote the chapter's annual magazine.", image: avatar("Tarun Kumar"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "18", name: "Nisha Patel", role: "Marketing Lead", year: "2023-24", batch: "B.Tech ECE, 2025", bio: "Grew our social presence by 200%.", image: avatar("Nisha Patel"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "19", name: "Rohit Jain", role: "Treasurer", year: "2023-24", batch: "B.Tech Chem, 2025", bio: "Handled sponsorships efficiently.", image: avatar("Rohit Jain"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "20", name: "Simran Kaur", role: "Secretary", year: "2023-24", batch: "B.Tech CSE, 2025", bio: "Ensured seamless team communication.", image: avatar("Simran Kaur"), github: "https://github.com", linkedin: "https://linkedin.com" },

  // 2022-23
  { id: "21", name: "Akash Sharma", role: "President", year: "2022-23", batch: "B.Tech CSE, 2023", bio: "Founded many of our current traditions. Currently at Google.", image: avatar("Akash Sharma"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "22", name: "Maya Joshi", role: "Vice President", year: "2022-23", batch: "B.Tech ECE, 2023", bio: "Scaled the team to 50+ members.", image: avatar("Maya Joshi"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "23", name: "Kabir Singh", role: "Technical Lead", year: "2022-23", batch: "B.Tech CSE, 2024", bio: "Built our core infrastructure.", image: avatar("Kabir Singh"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "24", name: "Ritu Verma", role: "Technical Lead", year: "2022-23", batch: "B.Tech IT, 2024", bio: "Initiated the open source program.", image: avatar("Ritu Verma"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "25", name: "Dev Patel", role: "Design Lead", year: "2022-23", batch: "B.Tech Mech, 2024", bio: "Designed the original ACM SVNIT logo.", image: avatar("Dev Patel"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "26", name: "Shruti Shah", role: "Events Lead", year: "2022-23", batch: "B.Tech Civil, 2024", bio: "Hosted our first offline hackathon post-pandemic.", image: avatar("Shruti Shah"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "27", name: "Ishaan Rao", role: "Content Lead", year: "2022-23", batch: "B.Tech EE, 2024", bio: "Started the monthly newsletter.", image: avatar("Ishaan Rao"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "28", name: "Ananya Desai", role: "Marketing Lead", year: "2022-23", batch: "B.Tech ECE, 2024", bio: "Brought in record sponsorships.", image: avatar("Ananya Desai"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "29", name: "Gaurav Singh", role: "Treasurer", year: "2022-23", batch: "B.Tech Chem, 2024", bio: "Managed finances flawlessly.", image: avatar("Gaurav Singh"), github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: "30", name: "Neha Gupta", role: "Secretary", year: "2022-23", batch: "B.Tech CSE, 2024", bio: "The backbone of the core team.", image: avatar("Neha Gupta"), github: "https://github.com", linkedin: "https://linkedin.com" },
];
