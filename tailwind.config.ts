import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--color-background)',
          elevated: 'var(--color-background-elevated)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
        },
        foreground: 'var(--color-foreground)',
        card: {
          DEFAULT: 'var(--color-surface)',
          foreground: 'var(--color-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-background-elevated)',
          foreground: 'var(--color-muted-foreground)',
        },
        faint: 'var(--color-faint-foreground)',
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          strong: 'var(--color-accent-strong)',
          dim: 'var(--color-accent-dim)',
          foreground: 'var(--color-accent-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-accent-2)',
          dim: 'var(--color-accent-2-dim)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: '#FFFFFF',
        },
        success: 'var(--color-success)',
        glaze: {
          cobalt: 'var(--glaze-cobalt)',
          deep: 'var(--glaze-cobalt-deep)',
          turquoise: 'var(--glaze-turquoise)',
          saffron: 'var(--glaze-saffron)',
          plaster: 'var(--glaze-plaster)',
          bisque: 'var(--glaze-bisque)',
          ink: 'var(--glaze-ink)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        // Remaining `font-mono` utilities render in the body face; the site
        // has no monospace voice.
        mono: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.625rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.875rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.375rem'],
        '4xl': ['2.25rem', '2.625rem'],
        '5xl': ['3rem', '3.25rem'],
        '6xl': ['3.75rem', '3.9rem'],
        '7xl': ['4.5rem', '4.6rem'],
        '8xl': ['6rem', '1'],
        '9xl': ['8rem', '1'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '6px',
      },
      transitionTimingFunction: {
        // Exponential ease-out for reveals and hover motion.
        cine: 'cubic-bezier(0.16, 1, 0.3, 1)',
        // Tile settle for CSS motion: exponential ease-out (the damped overshoot lives in the Framer springs).
        settle: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
