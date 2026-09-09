'use client';

import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  Points,
  ShaderMaterial,
} from 'three';
import { ACCENT } from '@/lib/three/palette';
import { environment } from '@/lib/three/scrollStore';
import { seeded } from './DataNetwork';

/**
 * Atmospheric dust. A shader is used rather than a sprite texture because the
 * whole effect is a soft radial falloff and a per-point twinkle — cheaper to
 * compute than to sample, and it avoids shipping an image.
 */
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  attribute float aScale;
  attribute float aPhase;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.14 + aPhase) * 0.6;
    p.x += cos(uTime * 0.11 + aPhase) * 0.4;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Perspective-correct sizing keeps distant dust small instead of a flat
    // uniform speckle.
    gl_PointSize = uSize * aScale * (28.0 / -mvPosition.z);
    vAlpha = 0.25 + 0.75 * (0.5 + 0.5 * sin(uTime * 0.7 + aPhase));
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float falloff = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(uColor, falloff * vAlpha * 0.5);
  }
`;

export function ParticleField({
  count,
  animate,
}: {
  count: number;
  animate: boolean;
}) {
  const pointsRef = useRef<Points>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  const geometry = useMemo(() => {
    const random = seeded(90210);
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (random() - 0.5) * 60;
      positions[i * 3 + 1] = (random() - 0.5) * 34;
      positions[i * 3 + 2] = (random() - 0.5) * 50;
      scales[i] = 0.4 + random() * 1.6;
      phases[i] = random() * Math.PI * 2;
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.setAttribute('aScale', new BufferAttribute(scales, 1));
    geo.setAttribute('aPhase', new BufferAttribute(phases, 1));
    return geo;
  }, [count]);

  useLayoutEffect(() => () => geometry.dispose(), [geometry]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 3.4 },
      uColor: { value: new Color(ACCENT) },
    }),
    []
  );

  useFrame((state) => {
    if (!animate || environment.hidden) return;
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (pointsRef.current) {
      // The field counter-rotates very slightly against the network, which
      // reads as parallax depth rather than as a second spinning object.
      pointsRef.current.rotation.y = -environment.progress * 0.35;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}
