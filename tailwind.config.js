/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        paysage: ['Paysage', 'sans-serif']
      },
      fontStretch: {
        expanded: 'expanded'
      }
    },
  },
  plugins: [],
}