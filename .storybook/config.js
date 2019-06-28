import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withA11y } from '@storybook/addon-a11y';
import ThemeProvider from '../src/components/ThemeProvider';

// Add global decorators here
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./welcomeStory.tsx');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
