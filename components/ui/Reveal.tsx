'use client';

import { motion, useReducedMotion, type Transition } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Each part of the wall arrives the way that part is made:
 * - above: a tile pressed onto the wall, settling with a damped overshoot
 *   (the same settle the hero uses)
 * - left: a run of grout being laid, a firm slide with no overshoot
 * - pop: a small piece dropped into its slot, a quick springy scale
 * - below: a default gentle rise
 * - quiet: text, which only eases in, with no spring
 * Reduced motion gets a plain fade for all of them.
 */
type RevealFrom = 'above' | 'left' | 'pop' | 'below' | 'quiet';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: RevealFrom;
}

const start: Record<RevealFrom, Record<string, number>> = {
  above: { opacity: 0, y: -24, rotate: -0.6 },
  left: { opacity: 0, x: -32 },
  pop: { opacity: 0, scale: 0.94 },
  below: { opacity: 0, y: 22 },
  quiet: { opacity: 0, y: 10 },
};

const end: Record<RevealFrom, Record<string, number>> = {
  above: { opacity: 1, y: 0, rotate: 0 },
  left: { opacity: 1, x: 0 },
  pop: { opacity: 1, scale: 1 },
  below: { opacity: 1, y: 0 },
  quiet: { opacity: 1, y: 0 },
};

const motion_: Record<RevealFrom, Transition> = {
  above: { type: 'spring', stiffness: 210, damping: 13 },
  left: { type: 'spring', stiffness: 170, damping: 28 },
  pop: { type: 'spring', stiffness: 300, damping: 20 },
  below: { type: 'spring', stiffness: 220, damping: 20 },
  quiet: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export function Reveal({
  children,
  delay = 0,
  className,
  from = 'below',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : start[from]}
      whileInView={shouldReduceMotion ? { opacity: 1 } : end[from]}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2, delay }
          : { ...motion_[from], delay }
      }
    >
      {children}
    </motion.div>
  );
}
