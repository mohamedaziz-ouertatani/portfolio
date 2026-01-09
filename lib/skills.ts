export interface Skill {
  name: string;
  level: number;
}

export interface SkillsData {
  languages: Skill[];
  librariesFrameworks: Skill[];
  tools: Skill[];
}

const skillsData: SkillsData = {
  languages: [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'SQL', level: 75 },
    { name: 'HTML', level: 70 },
    { name: 'CSS3', level: 65 },
    { name: 'PHP', level: 60 },
    { name: 'C', level: 75 },
    { name: 'C++', level: 75 },
    { name: 'Java', level: 65 },
    { name: 'R', level: 65 },
  ],
  librariesFrameworks: [
    { name: 'ReactJS', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'Fastify', level: 70 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Symfony', level: 65 },
    { name: 'scikit-learn', level: 70 },
    { name: 'Pandas', level: 75 },
    { name: 'NumPy', level: 75 },
    { name: 'SDL', level: 60 },
    { name: 'Qt', level: 60 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'SQL Server', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'Neo4j', level: 70 },
    { name: 'Oracle', level: 75 },
    { name: 'R Markdown', level: 65 },
    { name: 'Adobe Photoshop', level: 60 },
    { name: 'Adobe Illustrator', level: 60 },
    { name: 'Adobe Suite', level: 60 },
    { name: 'Arduino', level: 60 },
    { name: 'Docker', level: 70 },
    { name: 'MLflow', level: 70 },
    { name: 'Joblib', level: 65 },
    { name: 'Makefile', level: 65 },
    { name: 'Supervisor', level: 65 },
    { name: 'Power BI', level: 75 },
    { name: 'Power Query', level: 70 },
    { name: 'Google Data Studio', level: 70 },
    { name: 'EDA (Exploratory Data Analysis)', level: 70 },
    { name: 'Statistics', level: 70 },
  ],
};

export default skillsData;
