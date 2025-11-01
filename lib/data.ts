export const personalInfo = {
  name: "Ashwin Maurya",
  title: "Full Stack Developer",
  bio: "Software developer with a strong background in full stack development and AI-driven projects. Working with startups for over 2 years. Passionate about continuous learning and building scalable applications with TypeScript and JavaScript.",
  email: "ashwinmauurya30@gmail.com",
  phone: "+91 8623095023",
  location: "Pune, Maharashtra",
  social: {
    github: "https://github.com/ashwin-maurya",
    linkedin: "https://www.linkedin.com/in/ashwin-maurya/",
    codepen: "https://codepen.io/ashwin-maurya/",
  },
};

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Stealth Startup",
    role: "Software Engineer",
    startDate: "Aug 2025",
    endDate: "Present",
    location: "Florida, United States · Remote",
    type: "Full-time",
    responsibilities: [],
  },
  {
    company: "Stealth Startup",
    role: "Software Engineer",
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    location: "Florida, United States · Remote",
    type: "Internship",
    responsibilities: [],
  },
  {
    company: "SYNNGULAR",
    role: "Frontend Developer",
    startDate: "June 2024",
    endDate: "Present",
    location: "Hybrid",
    type: "",
    responsibilities: [
      "Developing scalable and high-performance React and Next.js applications for diverse clients.",
      "Building responsive, user-friendly interfaces with a focus on performance and accessibility.",
      "Optimizing frontend performance, enhancing security, and improving overall user experience.",
      "Collaborating with designers and backend teams to create seamless and efficient user interfaces.",
    ],
  },
  {
    company: "INTELLICURIA Pvt. Ltd.",
    role: "Full Stack Developer",
    startDate: "January 2024",
    endDate: "December 2024",
    location: "Remote",
    type: "",
    responsibilities: [
      "Integral part of the development team for an AI-driven clinical support system designed to enhance healthcare decision-making and better patient outcomes.",
      "Employed Prisma and PostgreSQL to develop a scalable and robust backend server, ensuring secure and efficient data management for healthcare applications.",
    ],
  },
];

export interface Project {
  title: string;
  description: string[];
}

export const projects: Project[] = [
  {
    title: "Medical Research Assistant",
    description: [
      "Developed a RAG-based medical research assistant bot which analyzes web sources and searches web databases like PubMed for relevant information for given query.",
      "Utilizes vector search to find relevant sections from articles or papers and provide concise information to users.",
      "Improved data retrieval accuracy by 20%, and enhanced system performance, making it 30% faster in processing and delivering results.",
    ],
  },
  {
    title: "Vector Based Co-Pilot",
    description: [
      "Built an AI-powered Bot Co-Pilot using vector search to retrieve relevant information from available data sources for accurate responses.",
      "Implemented the project using React, Postgres, and Node for the backend.",
      "Focused on optimizing data retrieval and response accuracy to enhance user interaction and information accessibility.",
    ],
  },
  {
    title: "BlogLink - Blogging Site",
    description: [
      "Developed a dynamic blog website with a React frontend and a Node.js backend, ensuring efficient and seamless performance.",
      "Integrated Firebase to enable secure Google authentication via email, enhancing user login experience.",
      "Designed the website to be fully responsive and user-friendly, providing an optimal viewing experience across all devices.",
    ],
  },
];

export const skills = {
  development: [
    "Next.js",
    "React.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Postgres",
    "MongoDB",
    "Prisma",
    "Tailwind",
    "Express.js",
    "Redux",
    "WordPress",
    "Figma",
    "Flutter",
    "PHP",
    "DevOps",
  ],
  cloud: ["AWS (Cloud Practitioner)"],
  tools: [
    "Git/GitHub",
    "Docker",
    "Visual Studio",
    "Android Studio",
    "Adobe Express",
    "Microsoft 365",
  ],
  other: ["Video Editing", "Content Writing", "Blogging", "Visual Designing"],
};

export interface EducationItem {
  institution: string;
  degree: string;
  grade: string;
}

export const education: EducationItem[] = [
  {
    institution: "AISSMS INSTITUTE OF INFORMATION TECHNOLOGY, PUNE",
    degree: "B.Tech in Computer Engineering",
    grade: "CGPA: 8.9",
  },
  {
    institution: "GOVERNMENT POLYTECHNIC AWASARI, PUNE",
    degree: "Diploma in Computer Science",
    grade: "Percentage: 90.63%",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-f07f4d9e-5f1c-4bda-90a1-d9ad2fad2115/",
  },
  {
    name: "WordPress Developer + Code",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-541fd8db-58ca-4f7d-9656-549bd40b2db2/",
  },
];

export interface PositionOfResponsibility {
  title: string;
  description: string;
}

export const positionsOfResponsibility: PositionOfResponsibility[] = [
  {
    title: "GDSC Web Lead",
    description: "Worked for the Google developers club as a Web Development Lead.",
  },
  {
    title: "Head (Newsletter Committee)",
    description: "Designed the official Newsletter for the department.",
  },
];

export const languages = {
  experienced: ["Hindi", "English", "Marathi"],
  familiar: ["Spanish", "German"],
};

