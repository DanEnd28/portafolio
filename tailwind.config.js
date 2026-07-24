/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Color principal (cian) y complementario (morado).
        accent: {
          DEFAULT: '#22d3ee',
          soft: '#0891b2',
        },
        accent2: {
          DEFAULT: '#a855f7',
          soft: '#7e22ce',
        },
      },
    },
  },
  plugins: [],
}
