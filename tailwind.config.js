module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#9B774A',
        otherGold: '#FCF9F5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
