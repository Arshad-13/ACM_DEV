<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

# ACM SVNIT Chapter Website

[View Live Site](https://acm-svnit.vercel.app)

---

## SECTION 1 — PROJECT DESCRIPTION

### Overview
A full-stack web platform built for the **ACM Student Chapter at NIT Surat** (estd 2006), serving as the digital hub for the chapter's community, events, and archives. The site features a verified personnel directory spanning multiple batches of ACM Core Committee, an interactive dual-orbit event trajectory visualization, a dedicated DotSlash portal, a functional command-line terminal interface, an MDX-powered technical blog, and a recruitment portal — all built on a **Brutalist Dark** design system with Neon Cyan accents, Space Grotesk typography, and smooth motion design powered by Framer Motion and GSAP.

### Architecture
The project is built on a modern, highly-performant frontend stack utilizing a component-based architecture with a strict Server/Client component split:
- **Framework:** Next.js 16 (App Router / Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Alpha/Beta)

### Design Philosophy
The website is built on a **Brutalist Dark** design system engineered for developer resonance — flat, high-contrast, and unapologetically monochrome.
- **Color System:** Pure pitch-black (`#000000`) canvas with a **Neon Cyan** accent (`#00F0FF`) — a deliberate aesthetic choice for the "hacker / computational" vibe. The theme is structured as a layered surface system (`--surface`, `--surface-raised`, `--surface-hover`) to provide depth without gradients.
- **Typography:** Display headings use **Space Grotesk** at ultra-tight letter spacing (`-0.05em`) and a clamp-based fluid scale (64px → 120px). Body copy uses a geometric `--font-sans` for legibility, while all interactive terminal elements are rendered in `--font-mono` for authenticity.
- **Background:** A subtle **wireframe grid** (40×40px, 5% white opacity) creates spatial depth on the hero without distracting from the content.
- **Motion Design:** Powered by **Framer Motion** for UI state transitions and **GSAP ScrollTrigger** for the event trajectory visualization.

### Tech Decisions & Reasoning
- **Why Next.js 16:** We leveraged the latest Next.js 16 build for **Turbopack** support, providing near-instantaneous hot module replacement during development of complex animations.
- **Why Cloudinary:** All chapter personnel and event media are hosted on Cloudinary, enabling automated on-the-fly optimization and transformation to maintain a high PageSpeed score despite heavy visual assets.
- **Why GSAP & Framer Motion:** While Framer Motion handles declarative component state animations, **GSAP ScrollTrigger** powers the high-performance, scrubbable event timelines that require sub-pixel precision.
- **Why shadcn/ui & Aceternity:** This combination allowed us to pair reliable, accessible UI primitives with premium, developer-centric aesthetic components (like Background Beams and Moving Borders).

### Core Pages
- **Home:** Dynamic landing hub with interactive Bento grids and real-time chapter statistics.
*   **DotSlash Portal:** A dedicated, high-fidelity experience for ACM NIT Surat's flagship 24-hour hackathon.
- **Team Archives:** A verified personnel directory featuring a robust cohort-based navigation system (2014–Present).
- **Event Trajectory:** An interactive dual-orbit visualization tracking chapter milestones and workshops.
- **Achievements:** A verified dashboard showcasing national awards and major institutional milestones.
- **Join Us:** A technical recruitment portal with interactive terminal-based protocol guides.
- **Blog:** An MDX-powered technical publishing platform for chapter-wide engineering insights.

### Folder Structure
```text
src/
├── app/
│   ├── (pages)/       # Route groups (Home, DotSlash, Events, Team, Join, Blog...)
│   ├── globals.css    # Brutalist design system, CSS variables and typography
│   └── layout.tsx     # Root layout, page transition orchestration
├── components/
│   ├── aceternity/    # Premium animation primitives (Beams, Borders, Spotlights)
│   ├── layout/        # Navbar, Footer and global structural components
│   ├── sections/      # Page-specific modular sections (Hero, Stats, CTA, etc.)
│   ├── shared/        # Reusable wrappers (ScrollReveal, containers)
│   └── ui/            # shadcn/ui base primitives and custom atoms
├── content/           # MDX files for blog posts
├── data/              # Ground truth JSON/TS data layers (Team, Events, Achievements)
├── lib/               # Personnel verification logic and MDX parsers
└── types/             # Strict TypeScript domain definitions
```

---

## SECTION 2 — FUTURE SCOPE

Our roadmap focuses on transitioning from a static archive to an interactive ecosystem. The following 6 protocols are prioritized for the next development phase:

1. **Member Portal & Identity**: A secure authentication layer allowing members to manage profiles, track event participation, and access internal chapter resources.
2. **Event Registration Engine**: A native RSVP system with automated waitlist management, QR-based check-ins, and post-event certificate generation.
3. **Admin Dashboard (CMS)**: A protected GUI for committee members to update team rosters, publish blogs, and manage event data without direct code interaction.
4. **Alumni Network Directory**: A searchable professional mapping of chapter alumni, facilitating mentorship opportunities and industry networking.
5. **Chapter Impact Analytics**: Data-driven dashboards visualizing member growth, event engagement trends, and community reach to inform chapter decisions.
6. **Automated Communication Protocol**: Integration of PWA notifications and automated email triggers for event reminders, deadline alerts, and newsletter updates.

---

## SECTION 3 — SKILLS MATRIX

| Domain | Technologies / Frameworks / Tools |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP + ScrollTrigger, shadcn/ui, Aceternity UI, Radix UI, Lucide React |
| Backend | FastAPI, Node.js, Next.js API Routes, REST APIs, gRPC, Docker, AWS (SageMaker, EC2), Google Cloud |
| AI | LangChain, RAG, Transformers (BERT/ViT), LLMs, Computer Vision, MCP |
| ML | PyTorch, TensorFlow, Scikit-Learn, MLOps |
| DevOps | Vercel (CI/CD, Analytics), GitHub Actions, ESLint, npm, Docker |
| Other | Python, C/C++, SQL, Bash/Shell, Git, OpenCV, Pandas, NumPy, HuggingFace, Postman, LaTeX, UI/UX Design |

---

## Getting Started

To run this project locally, ensure you have Node.js 18.17+ installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arshad-13/ACM_DEV.git
   cd acm-svnit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

---

## Contributing

The website relies on a strict data-layer architecture to make updates easy for non-developers. Future committee members do not need to touch the UI code to update chapter information:

- **Adding a new Team Member:** Simply open `src/data/team.ts` (or `team-mapping.json` for personnel verification) and append a new JSON object to the array under the relevant `year`.
- **Adding a new Event:** Edit `src/data/events.ts` (or the `EventsPage` component state) to add upcoming or past events.
- **Publishing a Blog Post:** Create a new `.mdx` file inside the `src/content/blog/` directory following the frontmatter template.

---

## Screenshots

*(Add screenshots after deployment)*
