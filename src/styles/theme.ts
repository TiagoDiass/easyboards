const lightTheme = {
  colors: {
    white: '#FFF',

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

  font: {
    family:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    medium: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },

  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },

  border: {
    radius: '0.4rem'
  },

  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 4px 24px'
} as const;

export const darkTheme = {
  ...lightTheme,

  colors: {
    white: '#FFF',

    primary: {
      accent1: '#272727',
      accent2: '#323232',
      accent3: '#999',
      accent4: '#030D15'
    },

    secondary: {
      accent1: '#FAFAFA',
      accent2: '#FAFAFA',
      accent3: '#BABABA'
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

  boxShadow: 'none'
} as const;

export default lightTheme;
