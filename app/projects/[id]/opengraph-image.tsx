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
        backgroundColor: '#08090b',
        backgroundImage:
          'radial-gradient(circle at 78% 22%, rgba(69,217,232,0.16), transparent 55%)',
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
          letterSpacing: '0.2em',
          color: '#edece8',
        }}
      >
        {site.shortName}
        <span style={{ color: '#45d9e8' }}>.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#45d9e8',
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#edece8',
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        {stack && (
          <div style={{ display: 'flex', fontSize: 24, color: '#8b939e' }}>
            {stack}
          </div>
        )}
      </div>
    </div>,
    { ...size }
  );
}
