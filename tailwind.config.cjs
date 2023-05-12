/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['roboto', 'sans-serif']
    },
    fontSize: {
      xs: '0.8125rem', // 14px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.375rem' // 22px
    },
    lineHeight: {
      1: '1.025625rem', // 16.41px
      2: '1.171875rem', // 18.75px
      3: '1.318125rem', // 21.09px
      4: '1.375rem', // 22px
      5: '1.61125rem' // 25.78px

    },

    colors: {
      black: '#000',
      white: '#FFF',

      'zinc-200': '#DDDDDD',
      'zinc-300': '#CCCCCC',
      'zinc-400': '#999999',
      'zinc-500': '#777777',
      'zinc-600': '#555555',


      'blue-400': '#9fb4f1',
      'blue-500': '#7695EC',
      'blue-600': '#6a86d4',
      'blue-700': '#1d4ed8',
      'blue-900': '#3b4a76',

      'green-500': '#47B960',
      'green-600': '#3fa656',

      'red-500': '#FF5151',
      'red-600': '#cc4040',
    },
    screens: {
      'xs': { min: '340px' },
      // => @media (min-width: 340px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
