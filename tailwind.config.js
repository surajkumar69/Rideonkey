/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF6B00',
          black: '#1A1A1A',
          white: '#FFFFFF',
          gray: '#F5F5F5',
          darkGray: '#333333',
          textGray: '#666666',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
