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
              className="tile tile-sm group block w-full overflow-hidden bg-background-elevated focus-visible:outline-none focus-visible:[outline-offset:-6px] focus-visible:[outline:3px_solid_var(--color-accent)]"
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
                className="h-auto w-full object-cover transition-transform duration-500 ease-cine group-hover:scale-[1.02]"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgb(11_21_51/0.88)] p-4"
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
              className="tile tile-sm absolute -top-12 right-0 inline-flex items-center gap-2 bg-glaze-saffron px-4 py-2 text-sm font-bold text-glaze-ink transition-colors hover:bg-[#ffc247]"
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
              className="h-auto max-h-[80vh] w-full bg-glaze-plaster object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
