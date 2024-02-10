/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = {
  transparent: 'transparent',
  white: 'white',
  'dark-blue': '#1F2029',
  'light-blue': '#2DA2DD',
  beige: '#DFDED2',
}
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: colors,
  },
  plugins: [],
};