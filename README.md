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
This repository contains the official website for the **ACM SVNIT Student Chapter**. The platform was engineered from the ground up to compete for the "Outstanding Chapter Website" award at the ACM India National Summit. It serves as the digital hub for our student community, providing centralized access to our technical events, competitive programming resources, hackathon recaps, and chapter archives.

### Architecture
The project is built on a modern, highly-performant frontend stack utilizing a component-based architecture with a strict Server/Client component split:
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4

### Design Philosophy
The website embraces a **Dark-First UI** tailored to resonate with developers. The core palette uses deep zinc backgrounds paired with the official ACM blue accent (`#0EA5E9`). 
- **Typography:** We utilize `Geist Sans` and `Geist Mono` for clean, highly legible, and modern developer aesthetics.
- **Motion Design:** The experience is brought to life using heavy, yet smooth, motion design powered by **Framer Motion** and **GSAP**, adding depth and premium micro-interactions across every view.

### Tech Decisions & Reasoning
- **Why Next.js 15:** We required robust SEO for the chapter website, making SSR essential. The App Router provides intuitive, nested layout handling, and built-in image optimization ensures our heavy asset pages (like the Team page) load blazingly fast.
- **Why Aceternity UI:** We opted for Aceternity UI to integrate pre-built, premium animated components (like 3D Tilt Cards, Spotlight Effects, and Infinite Marquees) that perfectly match the "developer tool" aesthetic without the overhead of building complex WebGL/Canvas interactions from scratch.
- **Why GSAP for scroll:** While Framer Motion handles state-based animations, **ScrollTrigger** from GSAP was chosen to provide pixel-perfect, scrubbable timeline controls for complex scroll animations (such as the drawing effect on the vertical timeline on the Events page), which is nearly impossible to orchestrate with CSS alone.
- **Why shadcn/ui:** We needed accessible, unstyled base components (Tabs, Dialogs) that gave us 100% ownership of the code, rather than fighting against an overly opinionated component library.

### Core Pages
- **Home:** A dynamic landing page featuring a Bento grid of events, statistics, and chapter testimonials.
- **Team:** An interactive, heavily animated cohort directory featuring a mandatory robust archive feature to navigate past team members.
- **Events:** A GSAP-powered vertical timeline tracking both upcoming workshops and past hackathons.
- **Achievements:** A dedicated dashboard displaying national awards, open-source PR statistics, and chapter milestones.
- **About:** Details our mission, history, and faculty advisory board.
- **Blog:** A fully custom MDX-based blogging platform utilizing `next-mdx-remote` for publishing technical content.
- **Contact:** An interactive two-column form for sponsorship and membership inquiries.

### Folder Structure
```text
src/
├── app/
│   ├── (pages)/       # Route groups for organized page architecture
│   ├── layout.tsx     # Global layout and PageTransition wrappers
│   └── globals.css    # Design system CSS variables and typography
├── components/
│   ├── aceternity/    # Complex animation components (copy-pasted)
│   ├── layout/        # Navbar, Footer, and structural components
│   ├── sections/      # Modular page sections (Hero, Stats, etc.)
│   ├── shared/        # Reusable wrappers (ScrollReveal)
│   └── ui/            # shadcn/ui base primitives
├── content/           # MDX files for blog posts
├── data/              # Static JSON-like data layers (Team, Events, Achievements)
├── lib/               # Utility functions and MDX parsers
└── types/             # Global TypeScript interfaces
```

---

## SECTION 2 — FUTURE SCOPE

Our vision for the platform extends far beyond a static informational site. Here is the detailed roadmap of planned features:

1. **Member Portal:** A secure login system for chapter members to manage their user profiles, RSVP to upcoming events, and access exclusive learning resources.
2. **Event Registration System:** Native, built-in registration forms handling waitlist management and automated email confirmations via the Resend API.
3. **Admin Dashboard:** A protected route enabling committee members to seamlessly add/edit events, manage team data, and publish blog posts through a CMS GUI—requiring zero code updates.
4. **ACM Digital Library Integration:** Direct embedded access to ACM's premium research papers and educational resources for authenticated SVNIT members.
5. **Chapter Analytics:** An internal dashboard visualizing member growth, event attendance trends, and resource popularity to drive better chapter decisions.
6. **Multi-language Support:** Hindi and Gujarati localization (i18n) to foster broader community reach within the SVNIT ecosystem.
7. **Push Notifications:** Upgrading the site to a Progressive Web App (PWA) with web push notifications to serve automated reminders for upcoming events and deadlines.
8. **Alumni Network:** A dedicated, searchable directory mapping where past members currently work or study (with opt-in consent), facilitating stronger networking.
9. **Live Event Streaming:** Native integration with the YouTube Live or Zoom APIs to allow remote attendance directly through the chapter portal.
10. **Automated Social Media:** A webhook integration that automatically drafts and posts to the official ACM SVNIT LinkedIn and Instagram accounts whenever a new blog post is published.
11. **System Theme Sync:** A robust Dark/Light mode toggle that perfectly syncs with the user's OS preference.
12. **Governance Section:** A publicly accessible, transparent archive of the chapter constitution, bylaws, and governance documents.

---

## SECTION 3 — SKILLS MATRIX

| Domain | Technologies / Frameworks / Tools |
|---|---|
| Frontend | Next.js 15, React 18, TypeScript, Tailwind CSS v4, Framer Motion, GSAP + ScrollTrigger, shadcn/ui, Aceternity UI, Radix UI, Lucide React, next/font, next/image |
| Backend | Next.js API Routes, Node.js, REST API design, next-mdx-remote, gray-matter, Vercel Edge Functions |
| AI | Prompt engineering, LLM-assisted development (Google Antigravity + Claude Sonnet 4.6), AI-generated placeholder content with manual curation |
| ML | — |
| DevOps | Vercel (CI/CD, Preview Deployments, Analytics), GitHub Actions, ESLint, Prettier, TypeScript strict mode, npm |
| Other | UI/UX Design (Figma wireframing, design systems, responsive design), Web Accessibility (WCAG AA, ARIA, prefers-reduced-motion), SEO (OpenGraph, semantic HTML, metadata API), Git workflow, MDX authoring |

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

- **Adding a new Team Member:** Simply open `src/data/team.ts` and append a new JSON object to the array under the relevant `year`.
- **Adding a new Event:** Edit `src/data/events.ts` to add upcoming or past events.
- **Publishing a Blog Post:** Create a new `.mdx` file inside the `src/content/blog/` directory following the frontmatter template.

---

## Screenshots

*(Add screenshots after deployment)*
