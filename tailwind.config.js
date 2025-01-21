/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["*.html", "*/index.html", "*/**/index.html"],
  theme: {
    
    extend: {
      colors: {
        deepblue: '#586994',
        lightblue: '#7D859C',
        lightgray: '#A2ABAB',
        darkgreen: '#B4C4AE',
        yellowcolor: '#E5E8B6',
      },
    },
    
  },
  plugins: [
  ],
}

