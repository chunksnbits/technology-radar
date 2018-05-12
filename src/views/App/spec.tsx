
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './index';

import { mockApplicationState, mockTechnology } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App applicationState={ mockApplicationState({ technologies: [mockTechnology()]}) } />, div);
  unmountComponentAtNode(div);
});

it('shows technology radar', () => {
  const element = shallow(<App applicationState={ mockApplicationState({ technologies: [mockTechnology()]}) } />);
  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('shows app title and logo', () => {
  const element = shallow(<App applicationState={ mockApplicationState({ technologies: [mockTechnology()]}) } />);

  expect(element.find('.c-app__title').length).toBeTruthy();
  expect(element.find('.c-app__logo').length).toBeTruthy();
});
