/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'base': 'Poppins, sans-serif',
        'krona': "'Krona One', sans-serif",
      },
      colors: {
        dark:"#0c080B",
        green:"#1E3329",
        yellow:"#FFD479",
        'dark-grey':"#B8B8B8",
        'light-grey':"#ECECEC",
        light: "#FAFAFA"
      },
    },
  },
  Variants: {
    extends: {},
  }


  // plugins: [],
}


 