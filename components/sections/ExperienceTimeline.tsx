'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Chip } from '@/components/ui/Chip';
import { experiencesData } from '@/lib/experiences';
import { educationData } from '@/lib/education';
import { zones } from '@/lib/sections';
import { environment, startEnvironmentTracking } from '@/lib/three/scrollStore';

const EXPERIENCE_ZONE_INDEX = zones.findIndex(
  (zone) => zone.id === 'experience'
);

export function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const count = dotRefs.current.length;

    if (shouldReduceMotion) {
      lineRefs.current.forEach((line) =>
        line?.style.setProperty('transform', 'scaleY(1)')
      );
      dotRefs.current.forEach((dot) => dot?.classList.add('is-active'));
      return;
    }

    const teardown = startEnvironmentTracking();
    let frame = 0;

    const render = () => {
      frame = requestAnimationFrame(render);

      const { activeZone, zoneProgress } = environment;
      const progress =
        activeZone > EXPERIENCE_ZONE_INDEX
          ? 1
          : activeZone < EXPERIENCE_ZONE_INDEX
            ? 0
            : zoneProgress;

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
        dot.classList.toggle('is-active', progress >= threshold);
      });
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      teardown();
    };
  }, [shouldReduceMotion]);

  return (
    <Section
      id="experience"
      index="04"
      label="Experience"
      heading="Where I applied it"
      caption="Three engineering roles across two companies, plus the degree they run alongside."
    >
      <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
        <ol className="relative">
          {experiencesData.map((experience, index) => (
            <li key={experience.jobTitle + experience.companyName}>
              <Reveal delay={index * 0.05}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span
                      ref={(el) => {
                        dotRefs.current[index] = el;
                      }}
                      aria-hidden="true"
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-border-strong transition-[background-color,transform] duration-300 [&.is-active]:scale-125 [&.is-active]:bg-accent"
                    />
                    {index < experiencesData.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="relative mt-2 w-px flex-1 bg-border"
                      >
                        <span
                          ref={(el) => {
                            lineRefs.current[index] = el;
                          }}
                          aria-hidden="true"
                          className="absolute inset-0 origin-top scale-y-0 bg-accent"
                        />
                      </span>
                    )}
                  </div>

                  <div className="pb-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                      {experience.date}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {experience.jobTitle}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {experience.companyName}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {experience.contributions.map((contribution) => (
                        <li
                          key={contribution}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-px w-3 shrink-0 bg-border-strong"
                          />
                          {contribution}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
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
          <h3 className="label-mono mb-6">Education</h3>
          <div className="space-y-6">
            {educationData.map((entry) => (
              <div
                key={entry.institution}
                className="bg-surface/50 rounded-lg border border-border p-6"
              >
                <h4 className="text-base font-semibold text-foreground">
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {entry.institution}
                    </a>
                  ) : (
                    entry.institution
                  )}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {entry.credential}
                </p>
                <p className="mt-1 font-mono text-[11px] text-faint">
                  {entry.date}
                </p>
                {entry.focus && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {entry.focus}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
