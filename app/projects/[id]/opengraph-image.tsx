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
        backgroundColor: '#f6f7f7',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontSize: 28,
          fontWeight: 700,
          color: '#14181c',
        }}
      >
        <svg width="68" height="12" viewBox="0 0 34 6">
          <circle cx="3" cy="3" r="3" fill="#440154" />
          <circle cx="10" cy="3" r="3" fill="#414487" />
          <circle cx="17" cy="3" r="3" fill="#2a788e" />
          <circle cx="24" cy="3" r="3" fill="#21918c" />
          <circle cx="31" cy="3" r="3" fill="#22a884" />
        </svg>
        {site.shortName}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#2a6589',
          }}
        >
          {role}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#14181c',
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        {stack && (
          <div style={{ display: 'flex', fontSize: 24, color: '#48515a' }}>
            {stack}
          </div>
        )}
      </div>
    </div>,
    { ...size }
  );
}
