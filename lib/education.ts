export interface Education {
  institution: string;
  credential: string;
  date: string;
  url?: string;
  focus?: string;
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
}

const educationData: Education[] = [
  {
    institution: 'ESPRIT',
    credential: 'Engineering Degree in Computer Science (Data Science)',
    date: 'Sep 2021 – Feb 2027 (expected)',
    url: 'https://esprit.tn/',
    focus: 'Machine Learning, Databases, Systems Design',
    current: true,
  },
  {
    institution: "L'école Arabe Jordanienne",
    credential: 'General Secondary Certificate',
    date: '2019 – 2021',
  },
];

const certificationsData: Certification[] = [
  { name: 'CCNA', issuer: 'Cisco' },
  { name: 'MongoDB Node.js Developer', issuer: 'MongoDB' },
  { name: 'Neo4j Fundamentals', issuer: 'Neo4j' },
];

export const languagesData = [
  { code: 'AR', label: 'Native' },
  { code: 'EN', label: 'Fluent' },
  { code: 'FR', label: 'Basic' },
];

export { educationData, certificationsData };
