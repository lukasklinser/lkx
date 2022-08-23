const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./posts/[id].js",
    "./components/layout.js",
    "./pages/index.js",
  ],
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.sky,
      violet: colors.violet
    },
    fontFamily: {
      sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      serif: ['serif']
    },
    extend: {
      colors: {
        'teal-blue': '#00fff2',
      },
      typography: {
          css: {
            blockquote: {
              fontStyle: 'normal',
            },
          },
        },
      }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-selection-variant"),
    require('@tailwindcss/typography')
  ],
  variants: {
    textColor: [
        // …
        'selection',
    ],
    backgroundColor: [
        // …
        'selection',
    ],
  }
}
