/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f2f5f3',
          100: '#e6ebe7',
          200: '#d0dad3',
          300: '#b1c2b7',
          400: '#95ac9d',
          500: '#7a9e8e',
          600: '#65877a',
          700: '#526c62',
          800: '#425750',
          900: '#2e3d37',
        },
      },
    },
  },
  plugins: [],
}
