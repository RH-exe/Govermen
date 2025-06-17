/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'rojo': '#881c1b',
      },
      fontFamily: {
        gabarito: ['Gabarito', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        georama: ['Georama', 'sans-serif'],
        geologica: ['Geologica', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

