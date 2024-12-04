/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree']
      },
      colors: {
        primaryColor: 'hsl(47, 88%, 63%)',
        accentColor: 'hsl(0, 0%, 100%)',
        primaryText: 'hsl(0, 0%, 7%)',
        accentText: 'hsl(0, 0%, 42%)'
      }
    },
  },
  plugins: [],
}