/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#11263C',
        'deep-black': '#121212',
        'gray': '#737791',
        'background-color': '#F2F2F7',
        'button-text-color': '#32395F'
      },
      borderWidth: {
        1: '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

