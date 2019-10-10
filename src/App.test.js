import React from 'react';
import ReactDOM from 'react-dom';
import AnimationControl from './AnimationControl.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnimationControl />, div);
  ReactDOM.unmountComponentAtNode(div);
});
