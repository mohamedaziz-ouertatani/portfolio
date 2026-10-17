import { experiencesData } from '@/lib/experiences';
import { educationData } from '@/lib/education';

/**
 * Turns the date strings already written in lib/experiences.ts and
 * lib/education.ts ("May 2024 – Aug 2024") into month indices, so the
 * experience figure is drawn from the same data the text shows.
 */
const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

/** Months since Jan 2000; a bare year resolves to January. */
function toMonth(token: string): number | null {
  const match = token.trim().match(/^(?:([A-Za-z]{3})[a-z]*\s+)?(\d{4})/);
  if (!match) return null;
  const month = match[1] ? MONTHS.indexOf(match[1].toLowerCase()) : 0;
  return (Number(match[2]) - 2000) * 12 + Math.max(month, 0);
}

export function parseRange(date: string): { start: number; end: number } {
  const [from, to] = date.split(/[–-]/);
  const start = toMonth(from) ?? 0;
  const end = toMonth(to ?? from) ?? start;
  // A range ending in a month runs to the end of that month.
  return { start, end: end + 1 };
}

export interface TimelineRow {
  label: string;
  detail: string;
  date: string;
  kind: 'role' | 'study' | 'ask';
  start: number;
  end: number;
}

/** PFE: Feb 2027 for six months, from lib/site.ts' availability. */
const PFE_START = (2027 - 2000) * 12 + 1;

export const timelineRows: TimelineRow[] = [
  ...educationData
    .filter((entry) => entry.current)
    .map((entry) => ({
      label: entry.institution,
      detail: 'Engineering degree, Data Science',
      date: entry.date,
      kind: 'study' as const,
      ...parseRange(entry.date),
    })),
  ...[...experiencesData].reverse().map((entry) => ({
    label: entry.companyName,
    detail: entry.jobTitle,
    date: entry.date,
    kind: 'role' as const,
    ...parseRange(entry.date),
  })),
  {
    label: 'PFE',
    detail: 'End-of-Studies Internship, open',
    date: 'Feb 2027 – Aug 2027',
    kind: 'ask',
    start: PFE_START,
    end: PFE_START + 6,
  },
];

export const timelineStart = Math.min(...timelineRows.map((r) => r.start));
export const timelineEnd = Math.max(...timelineRows.map((r) => r.end));

/** January of every year the figure spans, for axis ticks. */
export const timelineYears: number[] = [];
for (
  let year = Math.ceil(timelineStart / 12);
  year * 12 <= timelineEnd;
  year++
) {
  timelineYears.push(year);
}
