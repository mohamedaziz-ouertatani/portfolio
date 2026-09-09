'use client';

import { useActiveZone } from '@/hooks/useEnvironment';

/**
 * Keeps the environment behind the content rather than in front of it, and
 * quiets it progressively as the reader descends.
 *
 * The brief's rhythm is dense network → simpler geometry → quiet → contact,
 * and this is what actually delivers it: by the About and Contact zones the
 * network is almost fully veiled, so those sections read as calm without
 * needing a second scene. Driven by the zone subscription rather than by
 * scroll position, so it costs six style writes per page rather than one per
 * frame; the CSS transition smooths the steps.
 */
const ZONE_OPACITY = [0.34, 0.52, 0.62, 0.74, 0.86, 0.93];

export function EnvironmentScrim() {
  const zone = useActiveZone();
  const opacity = ZONE_OPACITY[zone] ?? ZONE_OPACITY[0];

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[5] bg-background transition-opacity duration-[1200ms] ease-cine"
        style={{ opacity }}
      />
      {/* A permanent horizontal wash so the text column always sits on the
          darkest part of the frame, whatever the network is doing. */}
      <div
        aria-hidden="true"
        className="via-background/55 pointer-events-none fixed inset-0 z-[5] bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="to-background/70 pointer-events-none fixed inset-0 z-[5] bg-gradient-to-t from-background via-transparent"
      />
    </>
  );
}
