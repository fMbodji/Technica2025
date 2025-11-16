/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'elder-purple': '#53355a',
        'elder-orange': '#c57022',
        'elder-star': '#f2ae18',
        'elder-light': '#c5afcf',
      },
      fontSize: {
        'base': '18px', // Larger default for elders
      },
    },
  },
  plugins: [],
}