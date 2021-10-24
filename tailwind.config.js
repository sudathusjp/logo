module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          '600': '#5022B8',
        }
      }
    },

    backgroundColor: theme => ({
      'primary': '#5022B8',
      'secondary': '#EFF4FB',
      'danger': '#F24040',
      'success' : '#5CC151',
      'info' : '#03A2FD',
      'light' : '#EFF4FB',
     })
     
     
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
