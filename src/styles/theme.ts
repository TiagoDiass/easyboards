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
  }
} as const;

export default theme;
