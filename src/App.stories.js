import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from './App';

storiesOf('App', module)
  .add('Test App', () => (
    <App onClck={action('app clicked')}></App>
  ));
