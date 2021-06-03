module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sepia: {
          '50':  '#fcfbf8',
          '100': '#faf0dd',
          '200': '#f3d8b9',
          '300': '#e3b087',
          '400': '#d38258',
          '500': '#a86b4c',
          '600': '#9e4524',
          '700': '#79341c',
          '800': '#532415',
          '900': '#34160d',
        },
        olive: {
          '50':  '#faf9f5',
          '100': '#f5f0d9',
          '200': '#e7dfaf',
          '300': '#c8bc7a',
          '400': '#9c944b',
          '500': '#7b742b',
          '600': '#625a1d',
          '700': '#4b4418',
          '800': '#332e13',
          '900': '#211c0e',
        },
        seagreen: {
          '50':  '#f6f8f6',
          '100': '#e8f0ef',
          '200': '#c9e2db',
          '300': '#98c3b4',
          '400': '#5a9f87',
          '500': '#428060',
          '600': '#366747',
          '700': '#2c4d37',
          '800': '#1f3529',
          '900': '#14201c',
        },
        steel: {
          '50':  '#f4f8f8',
          '100': '#def1f8',
          '200': '#b6e1f0',
          '300': '#82c3db',
          '400': '#499fbf',
          '500': '#367fa3',
          '600': '#2d6588',
          '700': '#264c69',
          '800': '#1b334b',
          '900': '#111f31',
        },
        denim: {
          '50':  '#f6f9fa',
          '100': '#e2f1fb',
          '200': '#c1ddf7',
          '300': '#93bcea',
          '400': '#6596da',
          '500': '#4e72ca',
          '600': '#4057b5',
          '700': '#324191',
          '800': '#232c67',
          '900': '#141b41',
        },
        royalblue: {
          '50':  '#f7f9fb',
          '100': '#e4f1fc',
          '200': '#c7daf9',
          '300': '#9db7f1',
          '400': '#778fe5',
          '500': '#5f6bdc',
          '600': '#4e4fcb',
          '700': '#3c3ba9',
          '800': '#29287b',
          '900': '#17194c',
        },
        orchid: {
          '50':  '#f8fafb',
          '100': '#ecf0fb',
          '200': '#d7d7f8',
          '300': '#b5b2ee',
          '400': '#9988e1',
          '500': '#7f63d6',
          '600': '#6847c3',
          '700': '#4e359f',
          '800': '#362471',
          '900': '#1e1744',
        },
        violet: {
          '50':  '#fbfbfb',
          '100': '#f4f0f9',
          '200': '#e9d4f2',
          '300': '#d1ace1',
          '400': '#c180cc',
          '500': '#aa5bb8',
          '600': '#8e3f9c',
          '700': '#6a2f77',
          '800': '#492150',
          '900': '#29142d',
        },
        blush: {
          '50':  '#fcfcfa',
          '100': '#faf0ef',
          '200': '#f5d1de',
          '300': '#e9a6bc',
          '400': '#e37695',
          '500': '#d35273',
          '600': '#b93853',
          '700': '#912a3d',
          '800': '#661d28',
          '900': '#3d1216',
        },
        sunset: {
          '50':  '#fcfbfa',
          '100': '#fbf0e7',
          '200': '#f6d3cd',
          '300': '#eaa8a2',
          '400': '#e27974',
          '500': '#d15551',
          '600': '#b63b37',
          '700': '#8e2c29',
          '800': '#641f1c',
          '900': '#3d1310',
        },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}