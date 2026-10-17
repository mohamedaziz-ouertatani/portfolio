import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/** The quiet section: no figure, a portrait, and the writing carries itself. */
export function AboutPreview() {
  return (
    <Section id="about" heading="Who I am beyond the code">
      <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-2xl font-medium leading-[1.3] text-foreground sm:text-[1.75rem]">
            I care about the part of engineering that happens after the demo
            works: the pipeline that still runs next month, the API that fails
            loudly instead of quietly, the model whose results can be traced
            back to something real.
          </p>
          <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
            Outside of it, I keep the same habit of showing up repeatedly: the
            discipline of Muay Thai, the attention motorcycling demands, and
            time in the gym.
          </p>

          <Link
            href="/about"
            className="link mt-8 inline-flex items-center gap-2 text-base font-medium"
          >
            More about me
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <figure className="lg:col-span-4 lg:col-start-9">
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden bg-background-elevated lg:max-w-none">
            <Image
              src="/me.jpg"
              alt="Portrait of Mohamed Aziz Ouertatani"
              fill
              sizes="(min-width: 1024px) 28vw, 320px"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </figure>
      </div>
    </Section>
  );
}
