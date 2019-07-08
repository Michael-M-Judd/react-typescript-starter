import { createMuiTheme } from '@material-ui/core/styles';
import { DefaultTheme } from 'styled-components';

export const palette: DefaultTheme = {
  primary: {
    main: '#ffb700',
    dark: '#c78700',
    light: '#ffe94d'
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
    dark: '#ffb700'
  },
  success: {
    main: '#00C665',
    light: '#2DE58E',
    dark: '#009239'
  },
  text: {
    primary: 'rgba(255, 255, 255, 1.0)',
    secondary: 'rgba(230, 230, 230, 1.0)',
    disabled: '#B0B0B0',
    primaryTextLink: '#ffb700',
    secondaryTextLink: '#FFFFFF'
  },
  background: {
    primaryBgLight: '#FFFFFF',
    secondaryBgLight: '#F5F5F5',

    primaryBgDark: '#000000',
    secondaryBgDark: '#1A191A',

    default: '#1A191A'
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
        height: '64px',
        textTransform: 'none',
        boxShadow: 'none',
        fontWeight: 'bold',
        fontSize: 16,
        textShadow: 'none'
      },
      sizeLarge: {
        height: '72px',
        fontSize: 20,
        fontWeight: 'bold'
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
