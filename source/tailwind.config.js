module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1.5s'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)'
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
