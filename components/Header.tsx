'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
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
  const [isScrolled, setIsScrolled] = useState(false);

  // The bar is transparent over the hero and only materialises once the
  // environment has scrolled past it.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A drawer left open across a route change would trap the viewport.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href.startsWith('/#') ? false : pathname === href;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ease-cine ${
        isScrolled || isMenuOpen
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="container mx-auto flex items-center justify-between px-4 py-4"
      >
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-[0.2em] text-foreground transition-colors hover:text-accent"
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:text-accent ${
                  isActive(item.href) ? 'text-accent' : 'text-muted-foreground'
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
              <Download size={14} />
              CV
            </Button>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-surface md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="container mx-auto space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`block rounded-md px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                    isActive(item.href)
                      ? 'bg-surface text-accent'
                      : 'text-muted-foreground hover:bg-surface'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href={site.cv} download variant="secondary">
                <Download size={16} />
                Download CV
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
