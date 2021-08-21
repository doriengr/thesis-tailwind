module.exports = {
  mode: 'jit', //Using JustInTime Mode
  purge: {
    content: [
      'index.html',
      '/src/js/*.js',
      '/src/css/*.css',
    ],
    safelist: [
      'rotate-180',
    ],
  },
  theme: {
    colors: {
      beige: {
        lightest: '#faf9f7',
        light: '#e7e4db',
      },
      red: '#9d887a',
      brown: '#b3a898',
      green: '#8e8b7c',
      dark: '#5f6053',
    },
    fontFamily: {
      'ivypresto-display': ['ivypresto-display', 'serif'],
      'adobe-caslon-pro': ['adobe-caslon-pro', 'serif'],
      'montserrat-light': ['montserrat-light', 'serif'],
      'montserrat-medium': ['montserrat-medium', 'serif'],
    },
    fontSize: {
      'smallest': '0.625rem',
      'smaller': '0.75rem',
      'small': '0.875rem',
      'base': '1rem',
      'large': '1.125rem',
      'larger': '1.25rem',
      'largest': '1.875rem',
      'huge': '2.188rem',
      'huger': '3.125rem',
      'hugest': '4.375rem',
    },
    letterSpacing: {
      'wide': '0.15em',
      'standard': '0.12em',
      'tight': '0.05em',
    },
    lineHeight: {
      'standard': '1.5',
      'tight': '1.2',
    },
    extend: {
      spacing: {
        '16.6/100': '6%',
        '8.3/100': '12%',
        '3/10': '30%',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      height: {
        '19/20': '95%',
      },
      maxHeight: {
        '112': '28rem',
        '152': '38rem',
      },
      minHeight: {
        '384': '24rem',
      },
      zIndex: {
        '-1': '-1',
      },
      inset: {
        '3/20': '15%',
        '1/5': '20%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
