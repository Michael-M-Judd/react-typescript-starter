import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
  primary: {
    main: '#253AE4',
    dark: '#0619B0',
    light: '#4153e7'
  },
  secondary: {
    main: '#1A191A',
    dark: '#000000',
    medium: '#767676',
    light: '#E7E7E7'
  },
  neutral: {
    main: '#FFFFFF',
    light: '#FAFAFA',
    medium: '#F5F5F5'
  },
  error: {
    main: '#FF5942',
    light: '#FF8F6B',
    dark: '#E5210E'
  },
  warning: {
    main: '#FFC900',
    light: '#FFE277',
    dark: '#F79D00'
  },
  success: {
    main: '#00C665',
    light: '#2DE58E',
    dark: '#009239'
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.3)',
    disabled: '#B0B0B0',
    primaryTextLink: '#253AE4',
    secondaryTextLink: '#FFFFFF'
  },
  background: {
    primaryBgLight: '#FFFFFF',
    secondaryBgLight: '#F5F5F5',

    primaryBgDark: '#000000',
    secondaryBgDark: '#1A191A',

    default: '#FFFFFF'
  }
};

const customFontFamily = "'IBM Plex Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif";

export const mainTheme = createMuiTheme({
  palette,
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },

  typography: {
    fontFamily: customFontFamily,
    useNextVariants: false,
    h1: {
      fontWeight: 600,
      fontSize: '56px',
      lineHeight: '64px'
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '48px',
      lineHeight: '60px'
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '36px'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px'
    },
    body2: {
      fontSize: '16px',
      lineHeight: '24px',
      color: palette.text.secondary
    },
    subtitle1: {
      fontSize: '20px',
      lineHeight: '32px',
      fontWeight: 'bold'
    },
    button: {
      fontSize: '14px',
      lineHeight: '20px',
      color: palette.primary.light,
      textTransform: 'none',
      fontWeight: 'bold'
    },
    caption: {
      fontSize: '10px',
      lineHeight: '16px',
      color: palette.text.primary
    }
  },

  overrides: {
    MuiButton: {
      root: {
        height: '56px',
        textTransform: 'none',
        boxShadow: 'none',
        fontWeight: 'bold',
        fontSize: 14,
        textShadow: 'none'
      },
      sizeLarge: {
        height: '64px',
        fontSize: 18,
        fontWeight: 'normal'
      },
      sizeSmall: {
        height: '36px'
      }
    },
    MuiFormControl: {
      root: {
        marginTop: 20
      }
    }
  }
});
