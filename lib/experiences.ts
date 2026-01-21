export interface Experience {
  jobTitle: string;
  companyName: string;
  date: string;
  description: string;
  contributions: string[];
  skills: string[];
}

const experiencesData: Experience[] = [
  {
    jobTitle: 'Next.js Developer Intern',
    companyName: 'iTransform365',
    date: 'May 2024 – Aug 2024',
    description: `Developed and maintained scalable web applications using Next.js, collaborating with cross-functional teams to deliver high-quality solutions.`,
    contributions: [
      'Built and optimized Next.js components for performance and scalability.',
      'Implemented responsive UI with Tailwind CSS and TypeScript.',
      'Collaborated with backend engineers to integrate PostgreSQL services.',
    ],
    skills: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Agile Collaboration',
      'GitHub',
    ],
  },
  {
    jobTitle: 'React.js Developer',
    companyName: 'Swiver',
    date: 'Aug 2022 – Apr 2023',
    description: `Contributed to the development of Swiver.io, a business management platform supporting invoicing and stock management.`,
    contributions: [
      'Developed responsive UI components with React.js and TypeScript.',
      'Implemented multilingual support (Arabic, English, French).',
      'Optimized application logic to improve user experience and performance.',
    ],
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'UI/UX Design',
      'Multilingual Support',
      'Git',
    ],
  },
  {
    jobTitle: 'React.js Developer Intern',
    companyName: 'Swiver',
    date: 'Jun 2022 – Aug 2022',
    description: `Internship focused on building web applications and enhancing platform accessibility.`,
    contributions: [
      'Improved UI responsiveness and translation features.',
      'Implemented component logic to enhance functionality.',
      'Collaborated on accessibility improvements for wider usability.',
    ],
    skills: [
      'React.js',
      'Bootstrap',
      'JavaScript',
      'GitHub',
      'UI Responsiveness',
      'Accessibility',
    ],
  },
  {
    jobTitle: 'Academic Project Developer',
    companyName: 'ESPRIT',
    date: '2021 – Present',
    description: `Collaborated on multiple academic projects including e-commerce platforms, games, and desktop applications.`,
    contributions: [
      'Developed MERN-stack e-commerce platform with user and admin dashboards.',
      'Built a photo cube shop with image upload and order management.',
      'Implemented CRUD operations and database management in WASHA website project.',
      'Contributed to 2D game development using C and SDL with Arduino joystick integration.',
      'Developed charity management desktop application with PDF generation and QR code features.',
    ],
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Bootstrap',
      'PHP',
      'Oracle',
      'C/C++',
      'Qt',
      'Arduino',
      'SDL',
    ],
  },
];

export { experiencesData };
