import React from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { mainTheme, palette } from '../../theme';

interface ThemeProviderProps {
  children: React.ReactChild;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => (
  <MuiThemeProvider theme={mainTheme}>
    <StyledThemeProvider theme={{ ...mainTheme, palette }}>{children}</StyledThemeProvider>
  </MuiThemeProvider>
);

ThemeProvider.defaultProps = {};

export { ThemeProvider };
