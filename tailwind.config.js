/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
  
    extend: {
      transitionDuration: {
        '5000': '5000ms',
      },
      backgroundColor: {
        'custom-dark': '#202324', // Define your custom dark background color class
      },
    },
    
  },
  plugins: [],
}
