'use client';

import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { flushSync } from 'react-dom';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';

type ViewTransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

/**
 * next/link, but same-tab clicks cross-fade via the browser's View
 * Transitions API instead of an instant swap. Next 14's App Router has no
 * native integration for this yet, so the transition is driven manually:
 * `flushSync` forces the route change to commit synchronously inside the
 * transition callback, which is what lets the browser capture old/new
 * snapshots correctly. Unsupported browsers and reduced-motion fall through
 * to plain Link navigation.
 */
export function ViewTransitionLink({
  href,
  onClick,
  ...rest
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    if (
      typeof document === 'undefined' ||
      !('startViewTransition' in document)
    ) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    event.preventDefault();
    const target = href.toString();
    (
      document as Document & { startViewTransition: (cb: () => void) => void }
    ).startViewTransition(() => {
      flushSync(() => router.push(target));
    });
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
