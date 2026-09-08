/**
 * The six zones of the home-page environment. Shared by the navigation, the
 * scroll progress index and (later) the 3D scene director, so the label, the
 * anchor and the camera zone can never drift apart.
 */

export interface Zone {
  /** Two-digit index shown in the progress rail. */
  index: string;
  id: string;
  label: string;
  caption: string;
}

export const zones: Zone[] = [
  { index: '01', id: 'identity', label: 'Identity', caption: 'Who I am' },
  { index: '02', id: 'work', label: 'Work', caption: 'What I build' },
  { index: '03', id: 'stack', label: 'Stack', caption: 'How I build it' },
  {
    index: '04',
    id: 'experience',
    label: 'Experience',
    caption: 'Where I applied it',
  },
  {
    index: '05',
    id: 'about',
    label: 'About',
    caption: 'Who I am beyond the code',
  },
  {
    index: '06',
    id: 'contact',
    label: 'Contact',
    caption: "Let's build something useful",
  },
];
