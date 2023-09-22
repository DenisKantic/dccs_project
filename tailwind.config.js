/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens:{
    'xxs': '270px',
    'xs': '410px',
    'sm': '430px',
    'md': '640px',
    'mdd': '799px',
    'lg': '1024px'
  }
}