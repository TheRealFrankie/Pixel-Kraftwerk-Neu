/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
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
          500: '#0A0A0A', // Main black
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
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'body': ['1.0625rem', { lineHeight: '1.75' }],   // 17px, leading-relaxed
        'body-lg': ['1.125rem', { lineHeight: '1.75' }], // 18px
      },
      boxShadow: {
        'primary-glow': '0 0 20px -2px rgba(0, 179, 166, 0.35)',
        'primary-glow-lg': '0 0 30px -4px rgba(0, 179, 166, 0.4)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px -4px rgba(0, 0, 0, 0.5), 0 0 20px -4px rgba(0, 179, 166, 0.15)',
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};