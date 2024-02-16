/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#262626',
        secondary: '#ffffff',
        tertiary: '#99CB3C'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

