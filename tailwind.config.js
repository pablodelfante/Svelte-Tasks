module.exports = {
  // !process.env.ROLLUP_WATCH
  mode: 'jit',
  purge: {
    enabled: false,
    content: ['./public/index.html', './src/**/*.svelte'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
