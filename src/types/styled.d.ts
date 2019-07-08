import 'styled-components';
import { palette } from '../theme';

interface Theme {
  primary: {
    main: string;
    dark: string;
    light: string;
  };
  secondary: {
    main: '#1A191A';
    dark: '#000000';
    medium: '#767676';
    light: '#E7E7E7';
  };
  neutral: {
    main: '#FFFFFF';
    light: '#FAFAFA';
    medium: '#F5F5F5';
  };
  error: {
    main: '#FF5942';
    light: '#FF8F6B';
    dark: '#E5210E';
  };
  warning: {
    main: '#FFC900';
    light: '#FFE277';
    dark: '#ffb700';
  };
  success: {
    main: '#00C665';
    light: '#2DE58E';
    dark: '#009239';
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    primaryTextLink: string;
    secondaryTextLink: string;
  };
  background: {
    primaryBgLight: '#FFFFFF';
    secondaryBgLight: '#F5F5F5';

    primaryBgDark: '#000000';
    secondaryBgDark: '#1A191A';

    default: '#1A191A';
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
