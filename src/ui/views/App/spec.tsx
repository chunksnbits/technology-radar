
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

import { mockApplicationState } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(<App applicationState={ mockApplicationState() } />);

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('shows technology radar', () => {
  const element = shallow(<App applicationState={ mockApplicationState() } />);
  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('shows app title and logo', () => {
  const element = shallow(<App applicationState={ mockApplicationState() } />);

  expect(element.find('.c-app__title').length).toBeTruthy();
  expect(element.find('.c-app__logo').length).toBeTruthy();
});
