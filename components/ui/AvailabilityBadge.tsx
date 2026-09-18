import { site } from '@/lib/site';

export function AvailabilityBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`tile tile-sm inline-flex items-center gap-2.5 bg-glaze-saffron px-4 py-2 text-sm font-semibold text-glaze-ink ${className}`}
    >
      <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-glaze-ink" />
      {site.availability.label}
    </span>
  );
}
