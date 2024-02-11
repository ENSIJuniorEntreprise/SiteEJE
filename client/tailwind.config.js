/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'Photograph':['Photograoh Signature'],
        'brush':['Brush Script MT']
      },
      screens: {
        'yxs': {'min': '300px', 'max': '500px'},
      },
      
    },
  },
  plugins: [],
};
