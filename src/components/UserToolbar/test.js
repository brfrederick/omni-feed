import React from 'react';
import ReactDOM from 'react-dom';
import UserToolbar from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserToolbar />, div);
});
