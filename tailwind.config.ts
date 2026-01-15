import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earthy Trust Palette
        sage: {
          50: '#f6f7f5',
          100: '#e8ebe6',
          200: '#d1d7cd',
          300: '#b0baab',
          400: '#8B9A7F', // Primary
          500: '#6d7d64',
          600: '#56634f',
          700: '#454f41',
          800: '#3a4136',
          900: '#31372f',
        },
        terracotta: {
          50: '#fdf6f4',
          100: '#fae9e5',
          200: '#f5d6ce',
          300: '#edb9ac',
          400: '#D4735E', // Accent
          500: '#c8604a',
          600: '#b54837',
          700: '#97392d',
          800: '#7d3228',
          900: '#682d26',
        },
        cream: {
          50: '#FAF9F6', // Primary BG
          100: '#f5f4f0',
          200: '#e8e6df',
          300: '#d4d1c5',
          400: '#beb9a8',
          500: '#a8a290',
          600: '#8e8976',
          700: '#75705f',
          800: '#615d4f',
          900: '#534f44',
        },
        // Context-specific colors
        rural: {
          light: '#f0d5d2',
          DEFAULT: '#C85A54', // Rural Chinese
          dark: '#a13e38',
        },
        eastwa: {
          light: '#f5e6d1',
          DEFAULT: '#D4A574', // Eastern Washington
          dark: '#b8854f',
        },
        lowlit: {
          light: '#d9e5f0',
          DEFAULT: '#7B9AB5', // Low-literacy
          dark: '#5a7690',
        },
        weird: {
          light: '#e5e7eb',
          DEFAULT: '#6B7280', // Standard WEIRD
          dark: '#4b5563',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
