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
  theme: {
    container: {
      center: false,
    },
    extend: {
      fontFamily: {
        firaCode: ['FiraCode', 'monospace'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
