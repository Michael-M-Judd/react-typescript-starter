import React from 'react';
import { withInfo } from '../../utils';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import {{pascalcase name}} from './index';

storiesOf("{{pascalcase name}}", module).add(
  "default",
  withInfo(`description (markdown)`)(() => (
    <{{pascalcase name}} dummyProp={text("dummyProp", "initialValue")} />
  ))
);
