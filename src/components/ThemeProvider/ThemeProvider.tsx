import * as React from 'react';
import MuiThemeProvider, { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { mainTheme, palette } from '../../theme';

interface ThemeProviderProps {
  theme?: MuiThemeProviderProps['theme'];
  children: React.ReactElement;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme = {}, children }) => (
  <MuiThemeProvider theme={{ ...mainTheme, ...theme }}>
    <StyledThemeProvider theme={palette}>{children}</StyledThemeProvider>
  </MuiThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: mainTheme
};

export { ThemeProvider };
