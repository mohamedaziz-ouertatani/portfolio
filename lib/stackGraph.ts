import skillsData from '@/lib/skills';

/**
 * Relationships between the technologies already listed in lib/skills.ts.
 *
 * Only genuine, defensible edges are recorded here — a language to the
 * libraries written in it, a runtime to the frameworks on top of it, a store
 * to the things that read it. Nothing is connected merely to make the graph
 * look busier.
 */
export const stackEdges: [string, string][] = [
  ['Python', 'Pandas'],
  ['Python', 'NumPy'],
  ['Python', 'scikit-learn'],
  ['Python', 'statsmodels (ETS/ARIMA)'],
  ['Python', 'MLflow'],
  ['Python', 'Seaborn/Matplotlib'],
  ['Python', 'Plotly'],
  ['Pandas', 'NumPy'],
  ['Pandas', 'Seaborn/Matplotlib'],
  ['scikit-learn', 'MLflow'],
  ['statsmodels (ETS/ARIMA)', 'MLflow'],
  ['MLflow', 'Docker'],
  ['MLflow', 'Experiment Tracking'],

  ['TypeScript', 'Fastify'],
  ['TypeScript', 'Node.js'],
  ['TypeScript', 'React'],
  ['TypeScript', 'Next.js'],
  ['JavaScript', 'React'],
  ['JavaScript', 'Node.js'],
  ['Node.js', 'Express'],
  ['Node.js', 'Fastify'],
  ['Fastify', 'REST APIs'],
  ['Fastify', 'JWT/RBAC'],
  ['Express', 'REST APIs'],
  ['REST APIs', 'PostgreSQL'],

  ['SQL', 'PostgreSQL'],
  ['SQL', 'Data Warehousing & Schema Design'],
  ['PostgreSQL', 'Data Warehousing & Schema Design'],
  ['PostgreSQL', 'Metabase'],
  ['Data Warehousing & Schema Design', 'Power BI'],
  ['Metabase', 'Power BI'],
  ['Power BI', 'Google Data Studio'],

  ['React', 'Next.js'],
  ['Next.js', 'Tailwind CSS'],

  ['Docker', 'CI/CD'],
  ['Docker', 'Linux'],
  ['CI/CD', 'Git & GitHub'],
  ['Git & GitHub', 'Agile/Scrum'],
];

const allSkillNames = new Set(
  skillsData.flatMap((category) => category.items.map((item) => item.name))
);

/** Edges whose endpoints both exist in the skills data. */
export const validStackEdges = stackEdges.filter(
  ([from, to]) => allSkillNames.has(from) && allSkillNames.has(to)
);

const adjacency = new Map<string, Set<string>>();
for (const [from, to] of validStackEdges) {
  if (!adjacency.has(from)) adjacency.set(from, new Set());
  if (!adjacency.has(to)) adjacency.set(to, new Set());
  adjacency.get(from)!.add(to);
  adjacency.get(to)!.add(from);
}

export function relatedSkills(name: string): string[] {
  return Array.from(adjacency.get(name) ?? []);
}

export function categoryOf(name: string): string | undefined {
  return skillsData.find((category) =>
    category.items.some((item) => item.name === name)
  )?.label;
}
