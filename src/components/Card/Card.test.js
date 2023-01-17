import React from 'react';
// shallow render the component its given at a time 
// If the component render another component inside it won't render it
// It will test only the one component it's given
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});