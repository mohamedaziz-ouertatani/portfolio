import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // The site is dark-only; `dark` is applied permanently in the root layout so
  // that `dark:` utilities still resolve while the remaining pages are migrated
  // onto the semantic tokens below.
  darkMode: 'class',
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
        // Signal-cyan ramp. `primary-400` is the accent itself, so the
        // `dark:text-primary-400` utilities already in the codebase land on
        // brand colour during the migration.
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#7fe9f3',
          400: '#45d9e8',
          500: '#22c3d4',
          600: '#0e9db1',
          700: '#10788c',
          800: '#155e70',
          900: '#164e5e',
          950: '#083344',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
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
        sm: '4px',
        md: '8px',
        lg: '14px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.4)',
        md: '0 8px 30px -12px rgb(0 0 0 / 0.7)',
        glow: '0 0 40px -8px var(--glow-accent)',
      },
      transitionTimingFunction: {
        // Cinematic ease-out used for reveals and camera-adjacent UI motion.
        cine: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
