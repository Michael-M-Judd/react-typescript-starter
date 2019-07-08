import React from 'react';
import { withInfo } from '../../utils';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Home from './index';

storiesOf('Home', module).add('default', withInfo(`description (markdown)`)(() => <Home />));
