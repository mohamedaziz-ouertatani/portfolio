import { site } from '@/lib/site';

export function AvailabilityBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-accent-dim bg-background-elevated px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-accent ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {site.availability.label}
    </span>
  );
}
