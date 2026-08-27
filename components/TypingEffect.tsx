'use client';

import { useEffect, useState } from 'react';

export function TypingEffect({ texts }: { texts: string[] }) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;
    if (subIndex === texts[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), 1300);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(texts[index].substring(0, subIndex));
      },
      deleting ? 24 : 42
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
    <span className="inline-block min-h-[1.5em] text-primary-700 dark:text-primary-400">
      {text}
      <span aria-hidden="true" className="animate-pulse">
        |
      </span>
    </span>
  );
}
