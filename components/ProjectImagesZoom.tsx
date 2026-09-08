'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function ProjectImagesZoom({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Remembers which thumbnail opened the dialog so focus can be handed back.
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (openIndex === null) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);

    // A dialog over a scrollable page should not let the page scroll behind it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close]);

  if (!images?.length) return null;

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <li key={img}>
            <button
              type="button"
              className="group block w-full overflow-hidden rounded-md border border-border transition-colors hover:border-accent-dim"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setOpenIndex(idx);
              }}
              aria-label={`Enlarge screenshot ${idx + 1} of ${images.length}`}
            >
              <Image
                src={img}
                alt=""
                width={600}
                height={400}
                className="h-auto w-full object-cover opacity-70 transition-opacity duration-500 ease-cine group-hover:opacity-100"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <div
          className="bg-background/90 fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot ${openIndex + 1} of ${images.length}`}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute -top-12 right-0 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:text-accent"
              onClick={close}
            >
              <X size={14} aria-hidden="true" />
              Close
            </button>
            <Image
              src={images[openIndex]}
              alt={`Screenshot ${openIndex + 1} of ${images.length}`}
              width={1200}
              height={800}
              className="h-auto max-h-[80vh] w-full rounded-md border border-border object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
