/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f7f5f3',
          100: '#ebe6e1',
          200: '#d6ccc2',
          300: '#b8a99a',
          400: '#9a8775',
          500: '#7d6b5c',
          600: '#6a5a4d',
          700: '#584a41',
          800: '#4a3f38',
          900: '#1a1410',
          950: '#0d0a08',
        },
        terracotta: {
          DEFAULT: '#c45c3e',
          light: '#e07a5f',
          dark: '#9e3d28',
        },
        author: {
          bg: '#0d0a12',
          accent: '#c9a96e',
          glow: '#6b4c9a',
        },
        copy: {
          bg: '#faf8f5',
          accent: '#c45c3e',
          text: '#1a1410',
        },
        social: {
          bg: '#0a1210',
          accent: '#7eb89a',
          soft: '#c5e0d4',
          mist: '#14201c',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
