/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth :{
        container: "1320px"
      },
      fontFamily :{
        'pops' : ['poppins' , 'sans-serif']
      },
      backgroundColor :{
        hbg : "#282828"
      }
    },
  },
  plugins: [],
}