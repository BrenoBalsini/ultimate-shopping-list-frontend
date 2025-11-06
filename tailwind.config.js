/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olo: {
          DEFAULT: '#00FFCC',
          50: '#CCFFF5',
          100: '#99FFEB',
          200: '#66FFE0',
          300: '#33FFD6',
          400: '#00FFCC',
          500: '#00CCB3',
          600: '#009999',
          700: '#006666',
          800: '#003333',
          900: '#001A1A',
        },
      },
    },
  },
  plugins: [],
}
