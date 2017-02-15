import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import App from './App';

// add muiTheme
addDecorator(muiTheme())

storiesOf('App', module)
  .add('Test App', () => (
    <App onClck={action('app clicked')}></App>
  ))
  .add('raised mui button', () => (
    <RaisedButton label="Default" />
  ));
