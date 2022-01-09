module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          black: {
            1: '#0E0F14',
            2: '#14151D',
            3: '#151619',
            4: '#121212',
            5: '#1A1A1A',
            6: '#0E0802'
          },
          orange: {
            1: '#BF6B10',
            2: '#DD821F1a',
            3: '#DD821F',
            4: '#E65C00',
            5: '#F9D423'
          },
          blue: {
            1: '#4173EE',
            2: '#42ADE21a',
            3: '#0052D4',
            4: '#4364F7',
            5: '#6FB1FC'
          },
          green: {
            1: '#006F43',
            2: '#ADD100',
            3: '#7B920A'
          },
          gray: {
            light: {
              1: '#F6F6FA',
              2: '#F5F6FA'
            }
          },
          purple: {
            1: '#9847B51a',
            2: '#DA22FF',
            3: '#9733EE'
          },
          red: {
            1: '#FF07071a',
            2: '#E43A15',
            3: '#E65245'
          },
          pink: {
            1: '#EC008C',
            2: '#FC6767'
          }
        }
      },
      backgroundImage: {
        'hero-image': "url('../src/assets/hero.png')",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
