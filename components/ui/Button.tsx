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

// Square, flat, ruled: a primary action is solid ink, a secondary one is a
// hairline frame, and a ghost is a link with an icon.
const base =
  'group inline-flex items-center gap-2 rounded-sm py-2.5 text-sm font-medium transition-colors duration-200 ease-cine';

const variants: Record<Variant, string> = {
  primary:
    'px-5 bg-foreground text-background hover:bg-accent-strong [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-cine hover:[&_svg:last-child]:translate-x-0.5',
  secondary:
    'px-5 text-foreground [box-shadow:inset_0_0_0_1px_var(--color-border-strong)] hover:bg-surface hover:[box-shadow:inset_0_0_0_1px_var(--color-foreground)]',
  ghost:
    'text-accent underline decoration-1 underline-offset-[0.24em] hover:text-accent-strong hover:decoration-2',
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
