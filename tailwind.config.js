module.exports = {
  mode: 'jit',
  content: [
    './_site/**/*.js',
    './_site/**/*.html',
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
