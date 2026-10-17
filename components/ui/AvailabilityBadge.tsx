import { site } from '@/lib/site';

/** The ask, set in ink under the highlighter: the one yellow on the sheet. */
export function AvailabilityBadge({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm font-medium ${className}`}>
      <span className="mark">{site.availability.label}</span>
    </p>
  );
}
