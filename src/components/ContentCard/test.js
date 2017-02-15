import React from 'react';
import ReactDOM from 'react-dom';
import ContentCard from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentCard />, div);
});
