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
        primary: {
          50: '#CCF5F2',
          100: '#99EBE6',
          200: '#66E0D9',
          300: '#33D6CC',
          400: '#00C9BD',
          500: '#00B3A6',
          600: '#00998F',
          700: '#007F77',
          800: '#00665F',
          900: '#004C47',
        },
        dark: {
          100: '#262626',
          200: '#1E1E1E',
          300: '#171717',
          400: '#121212',
          500: '#0A0A0A',
          600: '#080808',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        },
        light: {
          100: '#FFFFFF',
          200: '#F2F2F2',
          300: '#E6E6E6',
          400: '#D9D9D9',
          500: '#CCCCCC',
          600: '#BFBFBF',
          700: '#B3B3B3',
          800: '#A6A6A6',
          900: '#999999',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Lato', 'sans-serif'],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.625' }],
      },
      boxShadow: {
        'primary-glow': '0 0 20px -2px rgba(0, 179, 166, 0.35)',
        'primary-glow-lg': '0 0 40px -4px rgba(0, 179, 166, 0.25)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.5), 0 1px 0 0 rgba(255, 255, 255, 0.03)',
        'card-hover': '0 8px 32px -4px rgba(0, 0, 0, 0.6), 0 0 24px -4px rgba(0, 179, 166, 0.12), 0 1px 0 0 rgba(255, 255, 255, 0.04)',
        'elevation': '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06)',
        'elevation-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 24px -4px rgba(0, 0, 0, 0.08)',
        'inner-subtle': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
      },
      backgroundImage: {
        'gradient-radial-subtle': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 179, 166, 0.06) 0%, transparent 70%)',
        'gradient-mesh-dark': 'radial-gradient(at 40% 20%, rgba(0, 179, 166, 0.04) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0, 179, 166, 0.03) 0px, transparent 50%)',
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideIn: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
};

export default config;
