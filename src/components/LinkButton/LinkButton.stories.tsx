import React from 'react';
import { withInfo } from '../../utils';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import LinkButton from './index';

storiesOf("LinkButton", module).add(
  "default",
  withInfo(`description (markdown)`)(() => (
    <LinkButton dummyProp={text("dummyProp", "initialValue")} />
  ))
);
