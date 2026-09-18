import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  download?: boolean;
  className?: string;
}

// Buttons are cut pieces too: chamfered corners, flat glaze, no shadow.
const base =
  'tile tile-sm group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors duration-200 ease-cine focus-visible:outline-none focus-visible:ring-0 focus-visible:[outline:2px_solid_currentColor] focus-visible:[outline-offset:-4px]';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent-strong',
  // A solid glaze rather than a drawn border: an inset border is cut off by
  // the chamfered corners.
  secondary: 'bg-background-elevated text-foreground hover:bg-surface-hover',
  ghost:
    'text-foreground underline decoration-2 underline-offset-[6px] hover:bg-background-elevated',
};

export function Button({
  href,
  children,
  variant = 'primary',
  icon,
  download,
  className = '',
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal || download) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={isExternal && !download ? '_blank' : undefined}
        rel={isExternal && !download ? 'noopener noreferrer' : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
