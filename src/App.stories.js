import React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import RaisedButton from 'material-ui/RaisedButton';
import App from './App';

addDecorator(muiTheme());
addDecorator(withKnobs);

storiesOf('App', module)
  .add('Test App', () => (
    <App onClck={action('app clicked')}></App>
  ))
  .add('raised mui button', () => (
    <RaisedButton label={text('Button Label', 'A button')} />
  ));
