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
    jobTitle: 'Front end Developer',
    companyName: 'Swiver',
    date: 'Jun 2022 - Apr 2023',
    description: `I gained hands-on experience in building web applications using React JS.
      I worked with a team of engineers on the Swiver project, a business management software that helps enterprises with invoicing and stock management.`,
    contributions: [
      'Contributed to various aspects of the application, including implementing responsive components for swiver.io.',
      'Contributed to multilingual support (Arabic, English, French), making the application accessible to a wider audience.',
      'Implemented logic using React JS and TypeScript, enhancing overall functionality and user experience.',
    ],
    skills: [
      'Bootstrap',
      'Git',
      'TypeScript',
      'React.js',
      'Node.js',
      'English-Arabic Translation',
    ],
  },
];

export { experiencesData };
