/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // BGA stamp — a warm, earned gold. The seal, not a star.
        stamp: {
          DEFAULT: '#b45309', // amber-700
          soft: '#fef3c7',    // amber-100
        },
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}
