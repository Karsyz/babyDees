/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'babyDeesBG': {
            DEFAULT: '#e3d3ba',
            dark: '#d4bc96',
            comp: '#4267A2',
            text: '#e5ebf5',
            red: '#ab0a0a',
            grey: '#F7F7F7',
            turq: '#A6D1CB',
        },
      },
      minHeight: {
        '30': '30vh'
      },
      dropShadow: {
        'bdLogo': '2px 5px 2px grey'
      },
      animation: {
        'reviewFade': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },

      },

    },
  },
  plugins: [
    require("daisyui"), 
    require('@tailwindcss/aspect-ratio'), 
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
