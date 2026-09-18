import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        oca: {
          black: '#0A0A0A',
          dark: '#111111',
          gray: '#7A7A7A',
          light: '#F5F5F0',
          white: '#FFFFFF',
          gold: '#C9A96E',
          'gold-light': '#E8D5B0',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'ken-burns': 'kenBurns 8s ease-in-out infinite alternate',
        'flow-in': 'flowIn 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '25%': { transform: 'scale(1.08) translate(-1%, -1%)' },
          '50%': { transform: 'scale(1.05) translate(1%, 0.5%)' },
          '75%': { transform: 'scale(1.1) translate(-0.5%, 1%)' },
          '100%': { transform: 'scale(1.06) translate(0.5%, -0.5%)' },
        },
        flowIn: {
          '0%': { opacity: '0', transform: 'scale(1.1) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
