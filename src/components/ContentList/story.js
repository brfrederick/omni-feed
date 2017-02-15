import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import ContentList from './';

addDecorator(muiTheme());
addDecorator(withKnobs);

storiesOf('Content', module)
  .add('List', () => (
    <ContentList />
  ));
