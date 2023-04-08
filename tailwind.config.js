/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B9982',
        secondary: '#EAEFEC',
        tertiary: '#FAFAFA',
        info: '#554FA6',
        pera: '#8B928F'
      }
    },
  },
  plugins: [],
}

