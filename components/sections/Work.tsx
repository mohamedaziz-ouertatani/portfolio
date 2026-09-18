import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Star } from '@/components/ui/Star';
import { ViewTransitionLink } from '@/components/ui/ViewTransitionLink';
import { findProject, hasRealScreenshot, projectHref } from '@/lib/projects';
import { glazeFor } from '@/lib/glaze';

// Curated by hand rather than derived from `priority`: this order, span and
// glaze pairing is specific to the homepage wall, and shouldn't shift just
// because the /projects ranking changes.
const featured = [
  {
    slug: 'researchbridge',
    title: 'ResearchBridge',
    category: 'Research Intelligence / AI',
    glaze: 'glaze-cobalt',
    span: 'row-span-2 lg:col-span-7 lg:row-span-4',
    showcase: true,
  },
  {
    slug: 'estate-mind',
    title: 'Estate-Mind',
    category: 'Data Engineering / Data Science',
    glaze: 'glaze-turquoise',
    span: 'row-span-2 lg:col-span-5 lg:row-span-2',
  },
  {
    slug: 'biflow',
    title: 'BIFlow',
    category: 'Multi-Agent Systems / BI',
    glaze: 'glaze-saffron',
    span: 'row-span-2 lg:col-span-5 lg:row-span-2',
  },
  {
    slug: 'smart-inventory',
    title: 'Smart Inventory Forecasting',
    category: 'Machine Learning / MLOps',
    glaze: 'glaze-deep',
    span: 'row-span-2 lg:col-span-4 lg:row-span-2',
  },
  {
    slug: 'mlops-pipeline',
    title: 'MLOps Pipeline',
    category: 'MLOps / Machine Learning',
    glaze: 'glaze-turquoise',
    span: 'row-span-2 lg:col-span-4 lg:row-span-2',
  },
  {
    slug: 'business-intelligence-dashboards',
    title: 'Business Intelligence Dashboards',
    category: 'Business Intelligence / Analytics',
    glaze: 'glaze-saffron',
    span: 'row-span-2 lg:col-span-4 lg:row-span-2',
  },
]
  .map((entry) => {
    const project = findProject(entry.slug);
    return project ? { ...entry, project } : null;
  })
  .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

export function Work() {
  return (
    <Section
      id="work"
      heading="Selected work"
      caption="Six projects across research tooling, data engineering, multi-agent systems, and ML. Each one opens as a case study."
    >
      <ul className="grid auto-rows-[120px] gap-3 lg:auto-rows-[130px] lg:grid-cols-12 lg:gap-3.5">
        {featured.map(
          ({ project, title, category, glaze, span, showcase }, index) => {
            const glazed = project.githubLink || project.liveDemoLink;
            const face = glazeFor(project, glaze);
            const hasImage = hasRealScreenshot(project);
            const isDarkFace = face === 'glaze-cobalt' || face === 'glaze-deep';

            return (
              <li key={project.id} className={span}>
                <Reveal delay={index * 0.05} className="h-full">
                  <ViewTransitionLink
                    href={projectHref(project)}
                    aria-label={`${title}: read the case study`}
                    className="flip-scene tile relative block h-full after:pointer-events-none after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none focus-visible:after:[outline-offset:-10px] focus-visible:after:[outline:3px_solid_#f0a81c]"
                  >
                    <div className="relative h-full w-full">
                      {/* Front: the glazed face */}
                      <div
                        className={`flip-front absolute inset-0 flex flex-col p-6 ${face}`}
                      >
                        <h3
                          className={`font-display font-extrabold leading-[1.02] tracking-tight ${
                            showcase
                              ? 'max-w-[14ch] text-4xl 2xl:text-5xl'
                              : 'text-2xl sm:text-3xl'
                          }`}
                        >
                          {title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold opacity-80">
                          {category}
                        </p>
                        <p
                          className={`mt-3 text-base leading-snug opacity-90 ${
                            showcase
                              ? 'line-clamp-4 max-w-[38ch] lg:max-w-[30ch]'
                              : 'line-clamp-3 max-w-[46ch]'
                          }`}
                        >
                          {project.description}
                        </p>
                        <p className="mt-auto flex items-center gap-2 pt-3 text-sm font-semibold">
                          <Star
                            size={16}
                            className={
                              glazed
                                ? isDarkFace
                                  ? 'text-glaze-saffron'
                                  : 'text-glaze-cobalt'
                                : 'opacity-40'
                            }
                          />
                          {glazed ? 'Code is public' : 'No public link yet'}
                        </p>

                        {showcase && hasImage && (
                          <div className="absolute bottom-6 right-6 top-6 hidden w-[40%] overflow-hidden lg:block">
                            <Image
                              src={project.images[0]}
                              alt={`Screenshot from ${project.title}`}
                              fill
                              sizes="30vw"
                              className="object-cover object-top"
                            />
                          </div>
                        )}
                      </div>

                      {/* Back: the ruled spec */}
                      <div className="flip-back glaze-deep absolute inset-0 flex flex-col p-6">
                        <dl className="divide-y divide-[rgb(245_246_241/0.22)] text-sm">
                          {project.role && (
                            <div className="grid grid-cols-[5.5rem_1fr] gap-3 pb-2">
                              <dt className="label !text-[#a9b9e0]">Role</dt>
                              <dd>{project.role}</dd>
                            </div>
                          )}
                          <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-2">
                            <dt className="label !text-[#a9b9e0]">Stack</dt>
                            <dd className="line-clamp-2">
                              {project.technologies.slice(0, 5).join(', ')}
                            </dd>
                          </div>
                          {project.metrics && project.metrics.length > 0 && (
                            <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-2">
                              <dt className="label !text-[#a9b9e0]">Numbers</dt>
                              <dd className="tnum">
                                {project.metrics
                                  .slice(0, 3)
                                  .map((m) => `${m.value} ${m.label}`)
                                  .join(' · ')}
                              </dd>
                            </div>
                          )}
                        </dl>
                        <p className="mt-auto flex items-center gap-2 font-display text-xl font-extrabold text-glaze-saffron">
                          Read the case study
                          <ArrowRight size={18} aria-hidden="true" />
                        </p>
                      </div>
                    </div>
                  </ViewTransitionLink>
                </Reveal>
              </li>
            );
          }
        )}
      </ul>

      <Link
        href="/projects"
        className="mt-10 inline-flex items-center gap-2 text-base font-bold text-accent underline decoration-2 underline-offset-[6px] transition-colors hover:text-accent-strong"
      >
        All projects
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </Section>
  );
}
