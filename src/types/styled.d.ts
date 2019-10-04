import 'styled-components';
import { mainTheme, palette } from '../theme';

const theme = { ...mainTheme, palette };
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line  @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
