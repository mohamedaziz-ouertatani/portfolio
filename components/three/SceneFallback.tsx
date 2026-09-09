/**
 * Shown when WebGL is unavailable, when the canvas throws, and while the 3D
 * bundle is still loading. It is pure CSS and inline SVG so it costs nothing
 * and can never itself fail — the page must never present a blank canvas.
 */
export function SceneFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="grid-backdrop absolute inset-0 opacity-70" />

      {/* Two soft light sources standing in for the scene's key and rim. */}
      <div
        className="absolute -right-1/4 top-0 h-[70vh] w-[70vh] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(69,217,232,0.5) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute -left-1/4 bottom-0 h-[60vh] w-[60vh] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(139,124,255,0.45) 0%, transparent 65%)',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <g stroke="rgba(69,217,232,0.28)" strokeWidth="0.6" fill="none">
          <path d="M120 180 L260 120 L410 190 L560 140 L690 220" />
          <path d="M120 180 L200 320 L360 380 L520 300 L690 220" />
          <path d="M260 120 L360 380" />
          <path d="M410 190 L520 300" />
          <path d="M200 320 L180 470 L390 520 L600 440 L520 300" />
        </g>
        <g fill="rgba(69,217,232,0.75)">
          {[
            [120, 180, 3.2],
            [260, 120, 2.2],
            [410, 190, 4],
            [560, 140, 2.2],
            [690, 220, 3.2],
            [200, 320, 2.6],
            [360, 380, 4.2],
            [520, 300, 3],
            [180, 470, 2.2],
            [390, 520, 2.8],
            [600, 440, 2.2],
          ].map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
      </svg>

      {/* Grounds the composition and hands the eye off to the content below. */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
