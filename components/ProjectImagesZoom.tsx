'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectImagesZoom({ images }: { images: string[] }) {
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!images?.length) return null;

  return (
    <>
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className="overflow-hidden rounded-lg border transition-transform hover:scale-105 focus:outline-primary-400 dark:border-gray-700"
            onClick={() => setModalImg(img)}
            aria-label={`Zoom image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`Project screenshot ${idx + 1}`}
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </button>
        ))}
      </div>
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalImg(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full bg-gray-900 bg-opacity-80 px-3 py-1 text-sm text-white hover:bg-opacity-100 focus:outline-primary-400"
              onClick={() => setModalImg(null)}
              aria-label="Close image"
            >
              ×
            </button>
            <Image
              src={modalImg}
              alt="Zoomed Project Image"
              width={1200}
              height={800}
              className="h-auto max-h-[80vh] w-full rounded-lg object-contain shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
