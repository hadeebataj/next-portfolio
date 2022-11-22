/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        'xs': {'min':'320px', 'max': '639px'},
        ...defaultTheme.screens,
      },
  },
  plugins: [],
};
