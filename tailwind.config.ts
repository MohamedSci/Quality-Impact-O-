import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // =====================
      // COLOR SYSTEM (REDESIGNED - Blueprint v1)
      // =====================
      colors: {
        // Navy Base (Header & Dark Surfaces)
        navy: {
          950: '#0F172A',
          900: '#111E2E',
          800: '#1A2A3D',
        },

        // Neutral Scale (Slate)
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },

        // Slate (Surfaces & Text) - Primary neutral
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          bg: '#0F172A', // Semantic alias
          surface: '#1E293B', // Semantic alias
          border: '#334155', // Semantic alias
        },

        // Electric Cyan (Primary Accent - Blueprint)
        cyan: {
          50: '#F0F9FE',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          accent: '#0EA5E9', // PRIMARY ACCENT
        },

        // Primary Palette (Electric Cyan - Compatibility)
        primary: {
          50: '#F0F9FE',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9', // Blueprint primary
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C3D66',
          950: '#06254E',
        },

        // Mint (Success & Status)
        emerald: {
          400: '#34D399',
          500: '#10B981', // Primary success
          600: '#059669',
        },

        // Accent Palette (Neural Indigo)
        accent: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#818CF8',
          600: '#6366F1',
          700: '#4F46E5',
          800: '#4338CA',
          900: '#3730A3',
          950: '#312E81',
        },

        // Semantic accent alias (legacy references)
        'accent-neural': '#818CF8',

        // Success Palette (Green)
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBFACB',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#145231',
          950: '#051E0F',
        },

        // Warning Palette (Amber)
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },

        // Error Palette (Red)
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#4C0519',
        },

        // Info Palette (Sky)
        info: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C3D66',
          950: '#06254E',
        },

        // Status Colors (Blueprint)
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#0EA5E9',
        },

        // Cloud Provider Colors (Marketing)
        cloud: {
          aws: '#FF9900',
          azure: '#0078D4',
          gcp: '#4285F4',
        },

        // Semantic Status Aliases
        'status-pass': '#10B981',
        'status-fail': '#EF4444',
        'status-flaky': '#F59E0B',
      },

      // =====================
      // TYPOGRAPHY
      // =====================
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Courier New', 'monospace'],
      },

      fontSize: {
        // Heading Scale (with line heights)
        h1: ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        h2: ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '700' }],
        h4: ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        h5: ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
        h6: ['1.25rem', { lineHeight: '1.6', fontWeight: '600' }],

        // Body Scale
        display: ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        base: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        xs: ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],

        // UI Scale
        label: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        caption: ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        code: ['0.875rem', { lineHeight: '1.5rem', fontFamily: 'JetBrains Mono' }],
      },

      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },

      // =====================
      // SPACING & LAYOUT
      // =====================
      spacing: {
        xs: '0.25rem', // 4px
        sm: '0.5rem', // 8px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        '2xl': '2.5rem', // 40px
        '3xl': '3rem', // 48px
        '4xl': '4rem', // 64px
        '5xl': '5rem', // 80px
        '6xl': '6rem', // 96px
        '7xl': '7rem', // 112px
        '8xl': '8rem', // 128px
        '128': '32rem',
        '144': '36rem',
      },

      gap: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
      },

      // =====================
      // BORDER & RADIUS
      // =====================
      borderRadius: {
        xs: '0.25rem', // 4px
        sm: '0.375rem', // 6px
        md: '0.5rem', // 8px
        lg: '0.75rem', // 12px
        xl: '1rem', // 16px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        full: '9999px',
      },

      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        8: '8px',
      },

      // =====================
      // SHADOWS (Updated - Premium Effects)
      // =====================
      boxShadow: {
        // Subtle shadows
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',

        // Cyan Glow effects (Premium feel - NEW)
        'glow-cyan': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-cyan-lg': '0 0 40px rgba(14, 165, 233, 0.5)',
        'glow-cyan-xl': '0 0 60px rgba(14, 165, 233, 0.6)',

        // Secondary glow effects
        'glow-accent': '0 0 20px rgba(129, 140, 248, 0.3)',
        'glow-success': '0 0 20px rgba(34, 197, 94, 0.2)',
        'glow-error': '0 0 20px rgba(239, 68, 68, 0.2)',

        // Inset shadows (depth)
        inset: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'inset-lg': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.1)',

        // Elevated card shadows
        card: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.15)',

        // None
        none: 'none',
      },

      // =====================
      // TRANSITIONS & ANIMATION
      // =====================
      transitionDuration: {
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },

      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.6, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      animation: {
        // Glow animations
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow-lg': 'pulse-glow-lg 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',

        // Fade animations
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',

        // Slide animations
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-left': 'slide-out-left 0.3s ease-in',
        'slide-in-up': 'slide-in-up 0.4s ease-out',
        'slide-in-down': 'slide-in-down 0.4s ease-out',

        // Scale animations
        'scale-in': 'scale-in 0.2s ease-out',
        'scale-in-slow': 'scale-in-slow 0.5s ease-out',
        'bounce-in': 'bounce-in 0.6s ease-out',

        // Loading animations
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',

        // Shimmer
        shimmer: 'shimmer 2s infinite',

        // Phase 4: Enhanced polish animations
        'flip-in': 'flip-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        float: 'float 3s ease-in-out infinite',
        wiggle: 'wiggle 0.7s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },

      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.5)',
          },
        },
        'pulse-glow-lg': {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(14, 165, 233, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 60px rgba(14, 165, 233, 0.4)',
          },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-right': {
          from: {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-out-left': {
          from: {
            opacity: '1',
            transform: 'translateX(0)',
          },
          to: {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
        },
        'scale-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },

        // Phase 4: Enhanced polish animations
        'fade-in-left': {
          from: {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          from: {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in-slow': {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'flip-in': {
          from: {
            opacity: '0',
            transform: 'perspective(400px) rotateY(-90deg)',
          },
          to: {
            opacity: '1',
            transform: 'perspective(400px) rotateY(0deg)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-1deg)',
          },
          '75%': {
            transform: 'rotate(1deg)',
          },
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
      },

      // =====================
      // UTILITIES
      // =====================
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1',
      },

      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        auto: 'auto',
        hide: '-1',
        base: '0',
        dropdown: '1000',
        sticky: '1010',
        fixed: '1020',
        modal: '1030',
        popover: '1035',
        tooltip: '1040',
      },

      // =====================
      // SCREEN BREAKPOINTS
      // =====================
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      // =====================
      // CONTAINER QUERIES
      // =====================
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
    },
  },

  // =====================
  // PLUGINS
  // =====================
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        // Focus ring utilities
        '.focus-ring': {
          '@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-md':
            {},
        },
        '.focus-ring-light': {
          '@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md':
            {},
        },
        '.focus-ring-offset': {
          '@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-900':
            {},
        },

        // Container utilities
        '.container-max': {
          '@apply max-w-7xl mx-auto': {},
        },
        '.container-tight': {
          '@apply max-w-5xl mx-auto': {},
        },
        '.container-wide': {
          '@apply max-w-full mx-auto': {},
        },

        // Section padding
        '.section-padding': {
          '@apply py-16 px-6 md:px-12': {},
        },
        '.section-padding-lg': {
          '@apply py-24 px-6 md:px-12': {},
        },
        '.section-padding-sm': {
          '@apply py-8 px-6 md:px-12': {},
        },

        // Grid utilities
        '.grid-auto': {
          '@apply grid auto-cols-max gap-4': {},
        },

        // Flexbox utilities
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.flex-between': {
          '@apply flex items-center justify-between': {},
        },

        // Text utilities
        '.truncate-line': {
          '@apply truncate': {},
        },
        '.truncate-lines-2': {
          '@apply line-clamp-2': {},
        },
        '.truncate-lines-3': {
          '@apply line-clamp-3': {},
        },

        // Glass morphism
        '.glass': {
          '@apply backdrop-blur-md bg-neutral-900/40 border border-neutral-700/50': {},
        },
        '.glass-lg': {
          '@apply backdrop-blur-lg bg-neutral-900/50 border border-neutral-700/30': {},
        },

        // Gradient text
        '.gradient-text': {
          '@apply bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500':
            {},
        },
        '.gradient-text-reversed': {
          '@apply bg-clip-text text-transparent bg-gradient-to-r from-accent-500 to-primary-400':
            {},
        },
      });
    }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        // Text selection
        '.select-none': {
          'user-select': 'none',
        },
        '.select-text': {
          'user-select': 'text',
        },
        '.select-all': {
          'user-select': 'all',
        },

        // Backface visibility
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },

        // Transforms
        '.perspective': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },

        // Text rendering
        '.text-optimize': {
          'text-rendering': 'optimizeLegibility',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },

        // Safe area padding
        '.safe-top': {
          'padding-top': 'max(1rem, env(safe-area-inset-top))',
        },
        '.safe-bottom': {
          'padding-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        },
      });
    }),
  ],
};

export default config;
