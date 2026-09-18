'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Star } from './ui/Star';
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
    <header className="zone-cobalt sticky top-0 z-50 w-full bg-glaze-deep print:hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-glaze-saffron focus:px-4 focus:py-2 focus:text-glaze-ink"
      >
        Skip to content
      </a>

      {/* The drawer lives inside this landmark so mobile visitors never get
          navigation links outside a nav element. */}
      <nav aria-label="Primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            <Star size={22} className="text-glaze-saffron" />
            {site.name}
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`text-sm font-semibold underline-offset-[10px] transition-colors hover:text-accent ${
                    isActive(item.href)
                      ? 'text-accent underline decoration-2'
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
                className="px-4 py-2"
              >
                <Download size={14} aria-hidden="true" />
                CV
              </Button>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="p-2 text-foreground transition-colors hover:bg-surface md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="bg-glaze-deep md:hidden">
            <ul className="container mx-auto space-y-1 px-4 pb-5 pt-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`block px-4 py-3 font-display text-2xl font-bold transition-colors ${
                      isActive(item.href)
                        ? 'bg-surface text-accent'
                        : 'text-foreground hover:bg-surface'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Button href={site.cv} download variant="secondary">
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div aria-hidden="true" className="frieze-saffron h-4" />
    </header>
  );
}
