/** @type {import('tailwindcss').Config} */

const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  purge: ["./src/**/*.vue"],
  theme: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }

        'md': '640px',
        // => @media (min-width: 768px) { ... }

        'lg': '768px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1024px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1280px',
        // => @media (min-width: 1536px) { ... }
      },
    extend: {},
  },
  plugins: [],
})
