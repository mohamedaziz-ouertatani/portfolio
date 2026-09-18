import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/** The quiet zone: the wall thins out and the writing carries itself. */
export function AboutPreview() {
  return (
    <Section id="about" heading="Who I am beyond the code">
      <Reveal>
        <p className="max-w-4xl font-display text-2xl font-bold leading-[1.25] tracking-tight text-foreground sm:text-3xl md:text-4xl">
          I care about the part of engineering that happens after the demo
          works: the pipeline that still runs next month, the API that fails
          loudly instead of quietly, the model whose results can be traced back
          to something real.
        </p>
        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          Outside of it, I keep the same habit of showing up repeatedly: the
          discipline of Muay Thai, the attention motorcycling demands, and time
          in the gym.
        </p>

        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 text-base font-bold text-accent underline decoration-2 underline-offset-[6px] transition-colors hover:text-accent-strong"
        >
          More about me
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
