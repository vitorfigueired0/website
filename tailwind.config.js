/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'payasage': ['src/assets/fonts/Paysage-Regular.woff', 'sans-serif'],
        'payasage-medium': ['src/assets/fonts/Paysage-Medium.woff', 'medium'],
        'payasage-bold': ['src/assets/fonts/Paysage-Bold.woff', 'bold'],
        'payasage-black': ['src/assets/fonts/Paysage-Black.woff', 'black'],
      },
      colors: {
        'pallete-1' : '#090806',
        'pallete-2' : '#002744',
        'pallete-3' : '#879daa',
        'pallete-4' : '#daf0fe'
      }
    },
  },
  plugins: [],
}