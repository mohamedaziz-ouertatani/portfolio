import { ImageResponse } from 'next/og';
import { findProject, projectsData } from '@/lib/projects';
import { site } from '@/lib/site';

export const runtime = 'edge';
export const alt = 'Project preview';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.slug }));
}

export default function OpengraphImage({ params }: { params: { id: string } }) {
  const project = findProject(params.id);
  const title = project?.title ?? site.name;
  const role = project?.role ?? site.role;
  const stack = project?.technologies.slice(0, 4).join('   ·   ') ?? '';

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        backgroundColor: '#163e93',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 28,
          fontWeight: 700,
          color: '#f5f6f1',
        }}
      >
        <svg width="36" height="36" viewBox="-10 -10 20 20">
          <path
            d="M0 -9.6 L2.6 -6.3 L6.8 -6.8 L6.3 -2.6 L9.6 0 L6.3 2.6 L6.8 6.8 L2.6 6.3 L0 9.6 L-2.6 6.3 L-6.8 6.8 L-6.3 2.6 L-9.6 0 L-6.3 -2.6 L-6.8 -6.8 L-2.6 -6.3 Z"
            fill="#f0a81c"
          />
        </svg>
        {site.shortName}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#f0a81c',
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#f5f6f1',
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        {stack && (
          <div style={{ display: 'flex', fontSize: 24, color: '#c6d2ee' }}>
            {stack}
          </div>
        )}
      </div>
    </div>,
    { ...size }
  );
}
