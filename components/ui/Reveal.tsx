'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Pieces are pressed into place: a short rise with a damped overshoot, the
 * same settle the hero tiles use. Reduced motion gets a plain fade.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2, delay }
          : { type: 'spring', stiffness: 220, damping: 20, delay }
      }
    >
      {children}
    </motion.div>
  );
}
