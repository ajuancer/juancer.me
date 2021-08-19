const colors = require('tailwindcss/colors');

module.exports = {
  enabled: true,
  purge: [
    './layouts/**/*.html',
    './layouts/*.html',
    './themes/simple/layouts/**/*.html',
    './themes/simple/layouts/*.html',
    './content/*.md',
    './content/**/*.md',
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: false,
    },
    extend: {
      fontFamily: {
        firaCode: ['FiraCode'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
