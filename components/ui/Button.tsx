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

const base =
  'group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-200 ease-cine focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-foreground hover:bg-accent-strong hover:shadow-glow',
  secondary:
    'border border-border text-foreground hover:border-accent hover:bg-surface',
  ghost: 'text-muted-foreground hover:text-foreground',
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
