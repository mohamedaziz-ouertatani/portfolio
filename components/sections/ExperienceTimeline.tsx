'use client';

import { useEffect, useRef } from 'react';
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Chip } from '@/components/ui/Chip';
import { Star } from '@/components/ui/Star';
import { experiencesData } from '@/lib/experiences';
import { educationData } from '@/lib/education';

export function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const count = experiencesData.length;

  // Scroll progress through the list drives one fill per segment: the grout
  // line between two entries fills as the reader travels between them.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 65%', 'end 55%'],
  });

  const paint = (progress: number) => {
    lineRefs.current.forEach((line, index) => {
      if (!line || count <= 1) return;
      const segStart = index / (count - 1);
      const segEnd = (index + 1) / (count - 1);
      const segProgress = Math.min(
        1,
        Math.max(0, (progress - segStart) / (segEnd - segStart))
      );
      line.style.transform = `scaleY(${segProgress})`;
    });
    dotRefs.current.forEach((dot, index) => {
      if (!dot) return;
      const threshold = count > 1 ? index / (count - 1) : 0;
      dot.classList.toggle('is-active', progress >= threshold - 0.001);
    });
  };

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (!shouldReduceMotion) paint(value);
  });

  useEffect(() => {
    // Reduced motion, and the first paint: show the finished timeline rather
    // than an empty one.
    paint(shouldReduceMotion ? 1 : scrollYProgress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  return (
    <Section
      id="experience"
      heading="Where I applied it"
      caption="Three engineering roles across two companies, plus the degree they run alongside."
    >
      <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
        <ol ref={listRef} className="relative">
          {experiencesData.map((experience, index) => (
            <li
              key={experience.jobTitle + experience.companyName}
              className="pb-14 last:pb-0"
            >
              <Reveal from="left">
                <div className="relative flex gap-6">
                  <div className="flex flex-col items-center">
                    <span
                      ref={(el) => {
                        dotRefs.current[index] = el;
                      }}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-border-strong transition-colors duration-300 [&.is-active]:text-accent"
                    >
                      <Star size={26} />
                    </span>
                    {index < count - 1 && (
                      <span
                        aria-hidden="true"
                        className="relative mt-2 w-[3px] flex-1 bg-border"
                      >
                        <span
                          ref={(el) => {
                            lineRefs.current[index] = el;
                          }}
                          className="absolute inset-0 origin-top bg-accent"
                          style={{ transform: 'scaleY(1)' }}
                        />
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 pb-2">
                    <p className="tnum text-sm font-bold text-accent">
                      {experience.date}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
                      {experience.jobTitle}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-muted-foreground">
                      {experience.companyName}
                    </p>

                    <ul className="mt-5 max-w-2xl space-y-2.5">
                      {experience.contributions.map((contribution) => (
                        <li
                          key={contribution}
                          className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-2 w-2 shrink-0 rotate-45 bg-glaze-turquoise"
                          />
                          {contribution}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Chip key={skill}>{skill}</Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <h3 className="label mb-5">Education</h3>
          <div className="space-y-3">
            {educationData.map((entry, index) => (
              <div
                key={entry.institution}
                className={`tile p-6 ${
                  index === 0 ? 'glaze-cobalt' : 'glaze-turquoise'
                }`}
              >
                <h4 className="font-display text-xl font-extrabold leading-tight">
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-2 underline-offset-4 hover:no-underline"
                    >
                      {entry.institution}
                    </a>
                  ) : (
                    entry.institution
                  )}
                </h4>
                <p className="mt-2 text-sm font-medium">{entry.credential}</p>
                <p className="tnum mt-1 text-sm opacity-80">{entry.date}</p>
                {entry.focus && (
                  <p className="mt-3 text-sm opacity-90">{entry.focus}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
