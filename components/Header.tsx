'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { PathMark } from './ui/PathMark';
import { site } from '@/lib/site';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A drawer left open across a route change would trap the viewport.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href.startsWith('/#') ? false : pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background print:hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-highlight focus:px-4 focus:py-2 focus:text-foreground"
      >
        Skip to content
      </a>

      {/* The drawer lives inside this landmark so mobile visitors never get
          navigation links outside a nav element. */}
      <nav aria-label="Primary">
        <div className="container mx-auto flex h-[4.25rem] items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-display text-base font-semibold text-foreground transition-colors hover:text-accent"
          >
            <PathMark />
            {site.name}
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`text-sm underline-offset-[0.5em] transition-colors hover:text-foreground ${
                    isActive(item.href)
                      ? 'font-medium text-foreground underline decoration-1'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                href={site.cv}
                download
                variant="secondary"
                className="!px-3.5 !py-1.5"
              >
                <Download size={14} aria-hidden="true" />
                CV
              </Button>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 p-2 text-foreground transition-colors hover:bg-surface md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-border bg-background md:hidden"
          >
            <ul className="container mx-auto px-4 pb-6 pt-2 sm:px-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`block border-b border-border py-3 font-display text-xl font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-foreground underline decoration-1 underline-offset-[0.3em]'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <Button href={site.cv} download variant="secondary">
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
