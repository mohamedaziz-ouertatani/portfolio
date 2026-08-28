export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  key: string;
  label: string;
  items: Skill[];
}

// Curated to match the CV's own categorization — every entry here is a skill
// actively marketed for the 2027 PFE search (Data Science / Data Engineering /
// MLOps / Full-Stack). Kept intentionally short: strong + relevant only.
const skillsData: SkillCategory[] = [
  {
    key: 'languages',
    label: 'Languages',
    items: [
      { name: 'Python', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'R', level: 70 },
    ],
  },
  {
    key: 'dataAndML',
    label: 'Data & Machine Learning',
    items: [
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 92 },
      { name: 'scikit-learn', level: 88 },
      { name: 'statsmodels (ETS/ARIMA)', level: 80 },
      { name: 'MLflow', level: 85 },
    ],
  },
  {
    key: 'backendAndAPIs',
    label: 'Backend & APIs',
    items: [
      { name: 'Fastify', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT/RBAC', level: 82 },
    ],
  },
  {
    key: 'databases',
    label: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 75 },
      { name: 'Neo4j', level: 70 },
      { name: 'Data Warehousing & Schema Design', level: 75 },
    ],
  },
  {
    key: 'devOpsAndMLOps',
    label: 'DevOps & MLOps',
    items: [
      { name: 'Docker', level: 87 },
      { name: 'Experiment Tracking', level: 85 },
    ],
  },
  {
    key: 'biAndVisualization',
    label: 'BI & Visualization',
    items: [
      { name: 'Metabase', level: 75 },
      { name: 'Power BI', level: 82 },
      { name: 'Google Data Studio', level: 70 },
      { name: 'Plotly', level: 80 },
      { name: 'Seaborn/Matplotlib', level: 85 },
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    key: 'toolsAndMethods',
    label: 'Tools & Methods',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'Agile/Scrum', level: 75 },
      { name: 'CI/CD', level: 78 },
    ],
  },
];

export default skillsData;
