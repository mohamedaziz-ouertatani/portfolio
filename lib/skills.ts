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
    { name: 'HTML5', level: 70 },
    { name: 'CSS3', level: 60 },
    { name: 'JavaScript', level: 80 },
    { name: 'PHP', level: 60 },
    { name: 'C/C++', level: 80 },
    { name: 'TypeScript', level: 70 },
    { name: 'Java', level: 60 },
    { name: 'SQL', level: 70 },
  ],
  librariesFrameworks: [
    { name: 'MongoDB', level: 60 },
    { name: 'Express.js', level: 60 },
    { name: 'ReactJS', level: 80 },
    { name: 'Node.js', level: 60 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Symfony', level: 70 },
  ],
  tools: [
    { name: 'Git & Github', level: 80 },
    { name: 'VS Code', level: 80 },
    { name: 'Oracle', level: 80 },
    { name: 'Adobe Photoshop', level: 60 },
    { name: 'Adobe Illustrator', level: 60 },
  ],
};

export default skillsData;
