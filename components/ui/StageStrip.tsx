import { stages } from '@/lib/stages';

/**
 * The same encoding as Fig. 1, at the size of a word: five positions, one per
 * stage of the data-to-product path, a filled viridis dot where the project's
 * stack covers that stage and a hairline ring where it does not. Repeating
 * one encoding across every project is what lets them compare as small
 * multiples.
 */
export function StageStrip({
  coverage,
  showLabels = false,
  className = '',
}: {
  coverage: boolean[];
  showLabels?: boolean;
  className?: string;
}) {
  const covered = stages.filter((_, index) => coverage[index]);
  const summary = covered.length
    ? `Covers ${covered.map((stage) => stage.label.toLowerCase()).join(', ')}`
    : 'No stage covered';

  return (
    <div className={className}>
      <svg
        role="img"
        aria-label={summary}
        viewBox="0 0 92 12"
        width="92"
        height="12"
        className="block overflow-visible"
      >
        <line
          x1="6"
          x2="86"
          y1="6"
          y2="6"
          stroke="var(--color-border)"
          strokeWidth="1"
        />
        {stages.map((stage, index) => (
          <circle
            key={stage.key}
            cx={6 + index * 20}
            cy="6"
            r={coverage[index] ? 4.5 : 3}
            fill={
              coverage[index]
                ? `var(--stage-${index})`
                : 'var(--color-background)'
            }
            stroke={coverage[index] ? 'none' : 'var(--color-border-strong)'}
            strokeWidth="1"
          />
        ))}
      </svg>
      {showLabels && (
        <p className="mt-1.5 text-xs text-faint">
          {covered.map((stage) => stage.label).join(' · ') || '—'}
        </p>
      )}
    </div>
  );
}
