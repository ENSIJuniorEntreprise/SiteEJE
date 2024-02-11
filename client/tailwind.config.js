/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'yxs': {'min': '300px', 'max': '500px'},
      },
      
    },
  },
  plugins: [],
};
