const theme = {
  colors: {
    primary: {
      accent1: '#FAFAFA',
      accent2: '#EAEAEA',
      accent3: '#999'
    },

    secondary: {
      accent1: '#444',
      accent2: '#333',
      accent3: '#151515'
    },

    error: {
      default: '#FF1A1A',
      darker: '#E00'
    },

    success: {
      lighter: '#3291FF',
      default: '#0070F3',
      darker: '#0761D1'
    },

    warning: {
      default: '#F5A623',
      darker: '#AB570A'
    }
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;

export default theme;
