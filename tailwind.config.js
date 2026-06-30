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
          orange: '#D4AF37', // Premium Gold
          black: '#0B0F19',  // Luxury Deep Black
          white: '#FFFFFF',
          gray: '#F8FAFC',   // Clean background gray
          darkGray: '#1E293B', // Sleek card background dark
          textGray: '#64748B', // Soft text gray
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
