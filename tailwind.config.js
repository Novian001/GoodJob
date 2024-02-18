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
        tertiary: '#99CB3C',
        customWhite: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

