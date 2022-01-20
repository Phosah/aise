module.exports = {
  purge: [],
  darkMode: 'class',
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
            5: '#F9D423',
            6: '#B87507',
            7: '#F25222'
          },
          blue: {
            1: '#4173EE',
            2: '#42ADE21a',
            3: '#0052D4',
            4: '#4364F7',
            5: '#6FB1FC',
            6: '#0A71CB',
            7: '#51B9F0',
            8: '#5285F2'
          },
          green: {
            1: '#006F43',
            2: '#ADD100',
            3: '#7B920A',
            4: '#52920A',
            5: '#A3C82A'
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
            3: '#9733EE',
            4: '#7F19D8'
          },
          red: {
            1: '#FF07071a',
            2: '#E43A15',
            3: '#E65245',
            4: '#BF0C0C',
            5: '#ED4A4F'

          },
          pink: {
            1: '#EC008C',
            2: '#FC6767'
          },
          yellow: {
            1: '#F2CF34'
          }
        }
      },
      backgroundImage: {
        'hero-image': "url('../src/assets/hero.png')",
        'one': "url('../src/assets/1.png')",
        'two': "url('../src/assets/2.png')",
        'three': "url('../src/assets/3.png')",
        'four': "url('../src/assets/4.png')",
        'five': "url('../src/assets/5.png')",
        'analysis': "url('../src/assets/competitive-analysis.png')",
        'analysis-mobile': "url('../src/assets/competitive-analysis-mobile.png')",
        'persona-1': "url('../src/assets/user-persona-1.png')",
        'persona-1-mobile': "url('../src/assets/user-persona-2.png')",
        'business': "url('../src/assets/business-opportunity.png')",
        'business-mobile': "url('../src/assets/business-opportunity-mobile.png')",
        'solutions': "url('../src/assets/the-solutions.png')",
        'solutions-mobile': "url('../src/assets/the-solutions-mobile.png')",
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
