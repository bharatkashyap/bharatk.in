module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%' : { opacity: '0%' },
          '100%': { opacity: '100%' }
        }
      },
      animation: {
        'fade-in': 'fade 1000ms cubic-bezier(0.4, 0, 0.6, 1) 1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
