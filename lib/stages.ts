import type { Project } from '@/lib/projects';

/**
 * The five stages of the data-to-product path, in order. Coverage is derived
 * from each project's own `technologies` list in lib/projects.ts and nothing
 * else: a stage is marked only when a listed technology belongs to it, so the
 * figures never claim more than the stack behind them.
 */
export interface Stage {
  key: 'data' | 'analysis' | 'model' | 'serve' | 'interface';
  label: string;
  caption: string;
  /** Lower-case fragments matched against a project's technologies. */
  match: string[];
}

export const stages: Stage[] = [
  {
    key: 'data',
    label: 'Data',
    caption: 'Collection, cleaning, storage',
    match: [
      'postgresql',
      'pgvector',
      'mongodb',
      'oracle',
      'web scraping',
      'data cleaning',
      'power query',
      'pandas',
    ],
  },
  {
    key: 'analysis',
    label: 'Analysis',
    caption: 'EDA, statistics, BI',
    match: [
      'eda',
      'statistics',
      'r markdown',
      'seaborn',
      'matplotlib',
      'plotly',
      'recharts',
      'power bi',
      'data studio',
      'metabase',
      'data visualization',
    ],
  },
  {
    key: 'model',
    label: 'Model',
    caption: 'ML, forecasting, LLMs',
    match: [
      'scikit-learn',
      'statsmodels',
      'pytorch',
      'efficientnet',
      'fashionclip',
      'sentence-transformers',
      'qlora',
      'llm',
      'gemini',
      'multi-agent',
      'clustering',
    ],
  },
  {
    key: 'serve',
    label: 'Serve',
    caption: 'APIs, containers, tracking',
    match: [
      'fastapi',
      'fastify',
      'express',
      'node.js',
      'docker',
      'mlflow',
      'github actions',
      'php',
    ],
  },
  {
    key: 'interface',
    label: 'Interface',
    caption: 'Web and desktop front ends',
    match: ['react', 'next.js', 'html', 'qt', 'sdl'],
  },
];

/** One boolean per stage, in stage order. */
export function stageCoverage(project: Project): boolean[] {
  const techs = project.technologies.map((tech) => tech.toLowerCase());
  return stages.map((stage) =>
    techs.some((tech) =>
      stage.match.some((fragment) =>
        fragment === 'eda' ? tech === 'eda' : tech.includes(fragment)
      )
    )
  );
}
