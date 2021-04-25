module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'meetup-blue': '#00455D',
        'meetup-purple': '#1F24CC'
      },
      spacing: {
        '72': '18rem'
      },
      width: {
        '7/10': '70%',
        '3/10': '30%'
      },
      fontSize: {
        xxs: '0.7rem'
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus']
  },
  plugins: [],
}
