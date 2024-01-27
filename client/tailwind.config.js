/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': '100px',
        'xs': '400px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280pax) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
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
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
