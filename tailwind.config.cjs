/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {animation:{
      shake:'shake 0.3s 1',

    },
    keyframes: {
      shake:{
        '0%': { transform: 'translateX(0) ' },
        '25%': { transform: 'translateX(5px)' },
        '50%': { transform: 'translateX(-5px) ' },
        '75% ':{ transform: 'translateX(5px)' },
        '100%': { transform: 'translateX(0) ' },
      },}
    },
  },
  plugins: [],
}
