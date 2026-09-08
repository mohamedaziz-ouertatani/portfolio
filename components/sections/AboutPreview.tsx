import Link from 'next/link';
import { ArrowRight, Bike, Dumbbell, Gamepad2, Swords } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const interests = [
  { icon: Swords, label: 'Muay Thai' },
  { icon: Bike, label: 'Motorcycling' },
  { icon: Dumbbell, label: 'Fitness' },
  { icon: Gamepad2, label: 'Gaming' },
];

/**
 * The quiet zone. Deliberately the least decorated section on the page — the
 * environment has thinned out by this point and the content carries itself.
 */
export function AboutPreview() {
  return (
    <Section
      id="about"
      index="05"
      label="About"
      heading="Who I am beyond the code"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I care about the part of engineering that happens after the demo
              works — the pipeline that still runs next month, the API that
              fails loudly instead of quietly, the model whose results can be
              traced back to something real.
            </p>
            <p>
              Outside of it, I keep the same habit of showing up repeatedly: the
              discipline of Muay Thai, the attention motorcycling demands, and
              time in the gym.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-strong"
          >
            More about me
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid grid-cols-2 gap-4">
            {interests.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="bg-surface/50 flex flex-col gap-3 rounded-lg border border-border p-6 transition-colors hover:border-accent-dim"
              >
                <Icon size={20} className="text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
