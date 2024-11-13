/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '340px',
          md: '768px',
          lg: '1424px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontFamily: {
        sans: ['Roboto', ], 
        bebas:['Bebas Neue']
      },

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

