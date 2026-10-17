import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { TimelineFigure } from '@/components/sections/TimelineFigure';
import { experiencesData } from '@/lib/experiences';
import { educationData } from '@/lib/education';

/**
 * Fig. 3 first, so the shape of the career reads in one glance; then each
 * role as a ruled entry with its dates in the margin, and the degree beside.
 */
export function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      heading="Where I applied it"
      caption="Three engineering roles across two companies, plus the degree they run alongside."
    >
      <TimelineFigure />

      <div className="mt-16 grid gap-x-10 gap-y-14 lg:grid-cols-12">
        <ol className="lg:col-span-8">
          {experiencesData.map((experience) => (
            <li
              key={experience.jobTitle + experience.companyName}
              className="grid gap-x-8 gap-y-2 border-t border-border py-8 first:pt-6 sm:grid-cols-[10rem_1fr]"
            >
              <p className="tnum text-sm text-faint sm:pt-1">
                {experience.date}
              </p>
              <Reveal>
                <h3 className="text-xl font-semibold leading-tight text-foreground">
                  {experience.jobTitle}
                </h3>
                <p className="mt-0.5 text-base text-muted-foreground">
                  {experience.companyName}
                </p>

                <ul className="mt-4 max-w-[64ch] space-y-1.5">
                  {experience.contributions.map((contribution) => (
                    <li
                      key={contribution}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.7rem] h-px w-3 shrink-0 bg-border-strong"
                      />
                      {contribution}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm text-faint">
                  {experience.skills.join(' · ')}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <aside aria-labelledby="education-heading" className="lg:col-span-4">
          <h3
            id="education-heading"
            className="border-t border-border pt-6 text-sm font-medium text-foreground"
          >
            Education
          </h3>
          <dl className="mt-4">
            {educationData.map((entry) => (
              <div
                key={entry.institution}
                className="border-t border-border py-4 first:border-t-0 first:pt-0"
              >
                <dt className="text-base font-semibold text-foreground">
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link !text-foreground"
                    >
                      {entry.institution}
                    </a>
                  ) : (
                    entry.institution
                  )}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {entry.credential}
                  <span className="tnum block text-faint">{entry.date}</span>
                  {entry.focus && (
                    <span className="mt-1 block">{entry.focus}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
