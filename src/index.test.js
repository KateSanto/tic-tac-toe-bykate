import React from 'react';
import ReactDOM from 'react-dom';
import Game from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/* Started next text. Not finished, so commented out:

it('should call mock function when button is clicked', () => {
  const mockFn = jest.fn();
  const tree = shallow(
    <Button name='Restart' handleClick={mockFn} />
  );
  tree.simulate('click');
  expect(mockFn).toHaveBeenCalled();
});

*/