import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: { xs: '480px' },
      colors: {
        // Primary = Deep Petrol
        primary: {
          50:  '#E7F4F2',
          100: '#C4E5E1',
          200: '#9ED4CE',
          300: '#70C0B8',
          400: '#3DADA4',
          500: '#0E7C72',  // main petrol
          600: '#0A5F58',
          700: '#07433E',
          800: '#042B28',
          900: '#021614',
        },
        // dark scale = Paper/Surface tones (semantically repurposed for single light theme)
        dark: {
          100: '#FFFFFF',  // card
          200: '#E4E9E7',  // border
          300: '#F3F5F4',  // surface-muted
          400: '#F3F5F4',  // section alternating bg
          500: '#FAFAF9',  // paper (page bg)
          600: '#EDF0EE',
          700: '#E0E5E2',
          800: '#0B1512',  // ink-band dark (footer/CTA)
          900: '#060D0C',
        },
        // light scale = Text tones
        light: {
          100: '#0C1210',  // ink (headings)
          200: '#404B48',  // body text
          300: '#68746F',  // muted text
          400: '#8F9B97',  // very muted
          500: '#B5BDBA',
          600: '#D4DAD8',
          700: '#E4E9E7',
          800: '#F3F5F4',
          900: '#FAFAF9',
        },
        // Ink band colors
        ink: {
          DEFAULT: '#0B1512',
          soft: '#122019',
          text: '#E7F4F2',
          muted: '#8FB5AE',
          border: '#1E3530',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Schibsted Grotesk', 'Inter', 'sans-serif'],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.625' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(12, 18, 16, 0.06), 0 1px 2px rgba(12, 18, 16, 0.04)',
        'card-hover': '0 8px 24px rgba(12, 18, 16, 0.08), 0 2px 8px rgba(12, 18, 16, 0.06)',
        'card-lifted': '0 12px 32px rgba(12, 18, 16, 0.1), 0 4px 12px rgba(12, 18, 16, 0.06)',
        'primary-glow': '0 0 20px rgba(14, 124, 114, 0.25)',
        'primary-glow-lg': '0 0 30px rgba(14, 124, 114, 0.35)',
        'elevation': '0 1px 2px rgba(12, 18, 16, 0.04), 0 4px 12px rgba(12, 18, 16, 0.06)',
        'elevation-lg': '0 4px 6px -1px rgba(12, 18, 16, 0.05), 0 10px 24px -4px rgba(12, 18, 16, 0.08)',
        'inner-subtle': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
      },
      backgroundImage: {
        'gradient-radial-subtle': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14, 124, 114, 0.07) 0%, transparent 70%)',
        'gradient-hero': 'radial-gradient(ellipse 100% 80% at 60% 0%, rgba(14, 124, 114, 0.08) 0%, transparent 60%)',
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideIn: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(32px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
};

export default config;
