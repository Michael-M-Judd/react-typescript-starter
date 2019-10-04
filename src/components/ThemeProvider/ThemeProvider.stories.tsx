import React from 'react';
import { withInfo } from '../../utils';
import { storiesOf } from '@storybook/react';

import ThemeProvider from './index';

storiesOf('ThemeProvider', module).add(
  'default',
  withInfo(`This component is a simple react provider that your app should be wrapped in`)(() => (
    <ThemeProvider>Theme provider</ThemeProvider>
  ))
);
