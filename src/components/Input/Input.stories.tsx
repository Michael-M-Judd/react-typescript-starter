import React from 'react';
import { withInfo } from '../../utils';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Input from './index';

storiesOf("Input", module).add(
  "default",
  withInfo(`description (markdown)`)(() => (
    <Input dummyProp={text("dummyProp", "initialValue")} />
  ))
);
