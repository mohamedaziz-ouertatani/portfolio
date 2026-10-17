/**
 * The brand mark: the five stage dots of the data-to-product path, all
 * filled, in viridis order. It is Fig. 1's encoding read as a signature.
 */
export function PathMark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 34 6"
      width="34"
      height="6"
      className={className}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <circle
          key={index}
          cx={3 + index * 7}
          cy="3"
          r="3"
          fill={`var(--stage-${index})`}
        />
      ))}
    </svg>
  );
}
