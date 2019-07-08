import React from 'react';
import { withInfo } from '../../utils';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import DateForm from './index';

storiesOf("DateForm", module).add(
  "default",
  withInfo(`description (markdown)`)(() => (
    <DateForm dummyProp={text("dummyProp", "initialValue")} />
  ))
);
