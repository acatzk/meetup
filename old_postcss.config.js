const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.config.js')

module.export = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    require('autoprefixer')
  ]
}