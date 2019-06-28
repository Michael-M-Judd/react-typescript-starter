import { withInfo as storybookWithInfo } from '@storybook/addon-info';

// We can use this to style the "with info" documents as we wish
const infoStyles = {
  header: {
    h1: {},
    body: {},
    h2: {}
  },
  infoBody: {}
};

export const withInfo = markdown =>
  storybookWithInfo({
    inline: true,
    source: true,
    styles: infoStyles,
    text: markdown
  });
