/**
 * The eight-point star (octagram) at the heart of the zellige pattern: two
 * squares turned 45 degrees against each other.
 */
export function Star({
  size = 20,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="-10 -10 20 20"
      className={className}
      fill="currentColor"
    >
      <path d="M0 -9.6 L2.6 -6.3 L6.8 -6.8 L6.3 -2.6 L9.6 0 L6.3 2.6 L6.8 6.8 L2.6 6.3 L0 9.6 L-2.6 6.3 L-6.8 6.8 L-6.3 2.6 L-9.6 0 L-6.3 -2.6 L-6.8 -6.8 L-2.6 -6.3 Z" />
    </svg>
  );
}
