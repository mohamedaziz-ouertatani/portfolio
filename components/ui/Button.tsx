import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  download?: boolean;
}

const base =
  'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none';
const variants = {
  primary: 'bg-accent text-accent-foreground hover:opacity-90',
  secondary:
    'border border-border text-foreground hover:bg-muted',
};

export function Button({
  href,
  children,
  variant = 'primary',
  icon,
  download,
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const className = `${base} ${variants[variant]}`;

  if (isExternal || download) {
    return (
      <a
        href={href}
        className={className}
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
    <Link href={href} className={className}>
      {icon}
      {children}
    </Link>
  );
}
