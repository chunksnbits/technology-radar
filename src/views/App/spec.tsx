
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

import { mockApplicationState, mockTechnology } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(<App applicationState={ mockApplicationState({ technologies: [mockTechnology()]}) } />);

  expect(element.exists).toBeTruthy();
  element.unmount();
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
