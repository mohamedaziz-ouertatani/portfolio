import {
  timelineEnd,
  timelineRows,
  timelineStart,
  timelineYears,
} from '@/lib/timeline';

const span = timelineEnd - timelineStart;
const pct = (month: number) => `${((month - timelineStart) / span) * 100}%`;

/**
 * Fig. 3, a range chart drawn from the dates in the text: the degree as a
 * thin rule underneath everything, each role as a bar, and the open PFE
 * window, the ask, as the one highlighted bar at the end of the axis.
 */
export function TimelineFigure() {
  return (
    <figure aria-labelledby="fig-3-caption">
      <div className="relative">
        {timelineRows.map((row, index) => (
          <div
            key={row.label + row.date}
            className="grid grid-cols-[6.5rem_1fr] items-center gap-4 py-1.5 sm:grid-cols-[12rem_1fr]"
          >
            <p className="truncate text-sm leading-tight">
              <span className="font-medium text-foreground">{row.label}</span>
              <span className="block truncate text-xs text-faint">
                {row.detail}
              </span>
            </p>
            <div className="relative h-5">
              <span
                aria-hidden="true"
                className={`bar-in absolute top-1/2 -translate-y-1/2 ${
                  row.kind === 'study'
                    ? 'h-[3px] bg-foreground'
                    : row.kind === 'ask'
                      ? 'h-3.5 bg-highlight [box-shadow:inset_0_0_0_1px_var(--color-foreground)]'
                      : 'h-3.5 bg-muted-foreground'
                }`}
                style={{
                  left: pct(row.start),
                  width: `${((row.end - row.start) / span) * 100}%`,
                  animationDelay: `${150 + index * 110}ms`,
                }}
              />
              <span className="sr-only">{row.date}</span>
            </div>
          </div>
        ))}

        {/* The axis: a range frame that stops where the data stops */}
        <div
          aria-hidden="true"
          className="grid grid-cols-[6.5rem_1fr] gap-4 sm:grid-cols-[12rem_1fr]"
        >
          <span />
          <div className="relative mt-1 h-7 border-t border-foreground">
            {timelineYears.map((year) => (
              <span
                key={year}
                className="absolute top-0 -translate-x-1/2"
                style={{ left: pct(year * 12) }}
              >
                <span className="mx-auto block h-1.5 w-px bg-foreground" />
                <span className="tnum mt-0.5 block text-xs text-faint">
                  {`’${String(year).padStart(2, '0')}`}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <figcaption id="fig-3-caption" className="caption mt-4 max-w-[60ch]">
        <span className="font-medium text-foreground">Fig. 3</span> Roles
        against the degree they run alongside, by month, with the open PFE
        window highlighted.
      </figcaption>
    </figure>
  );
}
