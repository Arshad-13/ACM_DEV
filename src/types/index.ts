export interface TeamMember {
  id: string;
  name: string;
  role: string;
  year: string;
  batch: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location?: string;
  description: string;
  category: string;
  image?: string;
  registrationLink?: string;
  participantsCount?: number;
  isUpcoming: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  icon?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  excerpt: string;
}
