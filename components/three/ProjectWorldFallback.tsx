/**
 * Trig on the server and in the browser can disagree in the last bit of a
 * double, which React reports as a hydration mismatch. Rounding to two
 * decimals is well below one device pixel here and makes the markup identical
 * on both sides.
 */
const round = (value: number) => Number(value.toFixed(2));

/** Precomputed so the ring is laid out once, not on every render. */
const RING = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  return {
    x: round(200 + Math.cos(angle) * 78),
    y: round(100 + Math.sin(angle) * 52),
  };
});

/**
 * Static stand-in for a project world: shown while the 3D chunk loads, when
 * WebGL is unavailable, and if a scene throws. Each project keeps its own
 * accent so the two still read as different systems without any JavaScript.
 */
export function ProjectWorldFallback({ slug }: { slug: string }) {
  const isEstate = slug === 'estate-mind';
  const accent = isEstate ? 'rgba(139,124,255,' : 'rgba(69,217,232,';

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${accent}0.16) 0%, transparent 70%)`,
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        {isEstate ? (
          <g fill={`${accent}0.65)`}>
            {Array.from({ length: 26 }, (_, i) => {
              const x = 40 + (i % 13) * 26;
              const row = Math.floor(i / 13);
              const h = 12 + ((i * 37) % 46);
              return (
                <rect
                  key={i}
                  x={x + row * 12}
                  y={150 - h + row * 14}
                  width="7"
                  height={h}
                  rx="1"
                />
              );
            })}
          </g>
        ) : (
          <g>
            <g stroke={`${accent}0.3)`} strokeWidth="0.8" fill="none">
              {RING.map((point) => (
                <line
                  key={`${point.x}-${point.y}`}
                  x1="200"
                  y1="100"
                  x2={point.x}
                  y2={point.y}
                />
              ))}
            </g>
            <g fill={`${accent}0.7)`}>
              {RING.map((point) => (
                <rect
                  key={`${point.x}-${point.y}`}
                  x={point.x - 3}
                  y={point.y - 4}
                  width="6"
                  height="8"
                  rx="1"
                />
              ))}
            </g>
            <circle cx="200" cy="100" r="11" fill={`${accent}0.9)`} />
          </g>
        )}
      </svg>
    </div>
  );
}
