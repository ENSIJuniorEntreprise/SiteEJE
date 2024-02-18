
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
      screens: {
        'service': {'max': '639px'},
        'ser': {'max': '400px'},
        'xxs': '100px',
        'xs': '400px',
        'mmxs': '458px',
        'mmmxs': '480px',
        'mxs': '576px',
        'xsm': '614px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'dmd': '933px',
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'dlg':'1186px',
        'xl': '1280px',
        // => @media (min-width: 1280pax) { ... }
        'dxl':'1316px',

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        'photograph-signature': ['Photograph Signature', 'sans-serif'],
        'gilroy-extrabold': ['Gilroy ExtraBold', 'sans-serif'],
        'proxima-nova-bold': ['Proxima Nova Bold', 'sans-serif'],
        'proxima-nova-extrabold': ['Proxima Nova ExtraBold', 'sans-serif']
                Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],

      },
      backgroundGradientPatterns: {
        'sm': 'radial-gradient(circle at 52% 50%, rgba(45, 162, 221, 0.2) 0, transparent 60%), radial-gradient(circle at 52% 50%, rgba(45, 162, 221, 0.2) 0, transparent 60%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-pattern-sm': {
          background: 'theme("backgroundGradientPatterns.sm")',
        },
        '.bor': { borderBlockColor: '#2DA2DD' },
        '.bacck': { backgroundImage: 'url("./pages/about us/img/eje3.png")' },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  colors: colors,

};