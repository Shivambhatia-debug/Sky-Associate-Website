import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        logo: {
          blue: '#1e40af', // Logo blue color
          'blue-light': '#3b82f6',
          'blue-dark': '#1e3a8a',
          yellow: '#fbbf24', // Logo yellow color
          'yellow-light': '#fcd34d',
          'yellow-dark': '#f59e0b',
        },
      },
    },
  },
  plugins: [],
};
export default config;

