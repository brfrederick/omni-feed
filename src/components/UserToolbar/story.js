import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import UserToolbar from './';

addDecorator(muiTheme());
addDecorator(withKnobs);

storiesOf('User Toolbar', module)
  .add('Toolbar', () => (
    <UserToolbar></UserToolbar>
  ));
