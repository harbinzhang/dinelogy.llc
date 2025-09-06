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
          50: '#CAE7E8',   // Lightest pastel
          100: '#A8D8DF',  // Light pastel
          200: '#86C9D6',  // Soft aqua
          300: '#64B9CC',  // Mid aqua
          400: '#42AAC3',  // Bright aqua
          500: '#209BBA',  // Main brand color
          600: '#1A7D98',  // Darker for hover
          700: '#146173',  // Darkest for active
        },
      },
    },
  },
  plugins: [],
}