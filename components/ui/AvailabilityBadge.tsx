export function AvailabilityBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-primary-600/30 bg-primary-50 px-4 py-1.5 font-mono text-xs font-semibold text-primary-800 dark:border-primary-400/30 dark:bg-primary-900/20 dark:text-primary-300 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600 dark:bg-primary-400" />
      </span>
      Available for PFE — Feb 2027 · 6 mo
    </span>
  );
}
