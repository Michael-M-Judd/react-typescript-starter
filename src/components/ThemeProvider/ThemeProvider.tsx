import * as React from 'react';
import MuiThemeProvider, { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { mainTheme } from '../../theme';

const ThemeProvider: React.SFC<MuiThemeProviderProps> = ({ theme = {}, children }) => (
  <MuiThemeProvider theme={{ ...mainTheme, ...theme }}>{children}</MuiThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: mainTheme
};

export { ThemeProvider };
