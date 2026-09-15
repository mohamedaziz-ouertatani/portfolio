'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Search } from 'lucide-react';
import { zones } from '@/lib/sections';
import { projectHref, projectsData } from '@/lib/projects';
import { site } from '@/lib/site';

interface Command {
  id: string;
  label: string;
  group: 'Pages' | 'Projects';
  href: string;
}

const pageCommands: Command[] = [
  { id: 'home', label: 'Home', group: 'Pages', href: '/' },
  ...zones
    .filter((zone) => zone.id !== 'identity')
    .map((zone) => ({
      id: zone.id,
      label: zone.label,
      group: 'Pages' as const,
      href: `/#${zone.id}`,
    })),
  { id: 'work', label: 'All Projects', group: 'Pages', href: '/projects' },
  { id: 'resume', label: 'Resume', group: 'Pages', href: '/resume' },
];

const projectCommands: Command[] = projectsData.map((project) => ({
  id: `project-${project.id}`,
  label: project.title,
  group: 'Projects',
  href: projectHref(project),
}));

const allCommands = [...pageCommands, ...projectCommands];

export function CommandPalette() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCommands;
    return allCommands.filter((command) =>
      command.label.toLowerCase().includes(q)
    );
  }, [query]);

  // Toggle on Cmd/Ctrl+K from anywhere on the site.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((open) => !open);
      } else if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Reset transient state and manage focus whenever the palette opens/closes.
  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      setQuery('');
      setActiveIndex(0);
      inputRef.current?.focus();
    } else {
      previouslyFocused.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const navigate = (command: Command) => {
    setIsOpen(false);
    router.push(command.href);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const command = results[activeIndex];
      if (command) navigate(command);
    }
  };

  let renderIndex = -1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="presentation"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="bg-background/70 fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh] backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Search ${site.name}'s site`}
            onClick={(event) => event.stopPropagation()}
            initial={
              shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: -8 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, scale: 0.97, y: -8 }
            }
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search
                size={16}
                className="shrink-0 text-faint"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search pages and projects…"
                aria-label="Search pages and projects"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-faint focus:outline-none"
              />
            </div>

            <ul className="max-h-80 overflow-y-auto py-2" role="listbox">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No matches for &ldquo;{query}&rdquo;
                </li>
              )}

              {(['Pages', 'Projects'] as const).map((group) => {
                const groupResults = results.filter((c) => c.group === group);
                if (groupResults.length === 0) return null;

                return (
                  <li key={group}>
                    <p className="px-4 pb-1 pt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                      {group}
                    </p>
                    <ul>
                      {groupResults.map((command) => {
                        renderIndex += 1;
                        const isActive = renderIndex === activeIndex;
                        return (
                          <li
                            key={command.id}
                            role="option"
                            aria-selected={isActive}
                          >
                            <button
                              type="button"
                              onMouseEnter={() => setActiveIndex(renderIndex)}
                              onClick={() => navigate(command)}
                              className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                                isActive
                                  ? 'bg-accent/10 text-accent'
                                  : 'text-muted-foreground hover:bg-surface'
                              }`}
                            >
                              {command.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
