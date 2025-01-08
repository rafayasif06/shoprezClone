import fluid, { extract,screens,fontSize } from 'fluid-tailwind'
/** @type {import('tailwindcss').Config} */

export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    extract
  }, theme: {
    screens,
    fontSize,
    extend: {
      colors:{
        customBlue:'#319DFF',
        customGray:'#0F121E'
      },
      fontFamily:{
        roboto:['Roboto']
      },
    },
  },
  plugins: [
    fluid
  ],
}

