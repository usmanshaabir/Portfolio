/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#7e22ce',
      },
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans'],
      }
    },
  },
  plugins: [],
}