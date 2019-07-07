import * as React from 'react';
import MuiThemeProvider, { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { mainTheme } from '../../theme';

interface ThemeProviderProps {
  theme?: MuiThemeProviderProps['theme'];
  children: React.ReactNode;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme = {}, children }) => (
  <MuiThemeProvider theme={{ ...mainTheme, ...theme }}>{children}</MuiThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: mainTheme
};

export { ThemeProvider };
