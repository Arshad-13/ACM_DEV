import { Event } from "../types";

export const events: Event[] = [
  // Past Events
  {
    id: "1",
    title: "DotSlash 7.0 Hackathon",
    date: "2024-02-15",
    description: "A 36-hour national level hackathon featuring innovative solutions from over 100 teams.",
    category: "Hackathon",
    isUpcoming: false,
  },
  {
    id: "2",
    title: "Web3 & Blockchain Workshop",
    date: "2023-11-10",
    description: "An introductory workshop on building decentralized applications.",
    category: "Workshop",
    isUpcoming: false,
  },
  {
    id: "3",
    title: "AI/ML Bootcamp",
    date: "2023-09-22",
    description: "A weekend bootcamp covering foundational machine learning concepts and neural networks.",
    category: "Workshop",
    isUpcoming: false,
  },
  {
    id: "4",
    title: "Tech Talk: Future of Cloud",
    date: "2023-08-05",
    description: "Guest lecture by industry experts on the evolution of cloud native architectures.",
    category: "Talk",
    isUpcoming: false,
  },
  {
    id: "5",
    title: "Open Source Contribution Drive",
    date: "2023-10-15",
    description: "A collaborative event to get students started with their first PR during Hacktoberfest.",
    category: "Event",
    isUpcoming: false,
  },
  {
    id: "6",
    title: "Competitive Programming Contest",
    date: "2024-01-20",
    description: "Annual algorithmic programming contest testing problem-solving skills.",
    category: "Contest",
    isUpcoming: false,
  },
  // Upcoming Events
  {
    id: "7",
    title: "DotSlash 8.0 Hackathon",
    date: "2024-08-20",
    description: "The next iteration of our flagship 36-hour hackathon. Bigger and better.",
    category: "Hackathon",
    isUpcoming: true,
    registrationLink: "https://dotslash.in",
  },
  {
    id: "8",
    title: "Intro to Next.js and React",
    date: "2024-07-15",
    description: "A hands-on workshop covering modern web development with Next.js.",
    category: "Workshop",
    isUpcoming: true,
    registrationLink: "https://forms.gle/example",
  },
];
