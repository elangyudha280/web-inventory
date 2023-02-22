/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':["'Poppins'",'sans-serif']
      },
      animation:{
        'show-modal':'showModal 0.3s cubic-bezier(.37,-0.25,.34,1.17) forwards'
      },
      keyframes: {
        showModal: {
          '0%': {opacity:'0' , transform: 'translateY(-30px)' },
          '100%': {opacity:'1' , transform: 'translateY(0px)' },
        }
      }

    },
  },
  plugins: [],
}
