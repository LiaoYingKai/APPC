/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        0.25: '1px',
        12.5: '50px',
      },
      height: {
        12.5: '50px',
      },
      colors: {
        black: '#11263C',
        'deep-black': '#121212',
        'gray': '#737791',
        'background-color': '#F2F2F7',
        'button-text-color': '#32395F',
        'tag-background-color': '#EDEDED',
        'collection-item-border-color': '#D5D5DA'
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

