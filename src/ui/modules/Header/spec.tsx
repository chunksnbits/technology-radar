
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { HeaderComponent as Header } from './index';

import { mockApplicationState, shallowWithApplicationState } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithApplicationState(<Header />, mockApplicationState());

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('renders title if available', () => {
  const element = shallowWithApplicationState(<Header />, Object.assign(mockApplicationState(), { title: 'Test' }));

  expect(element.find('.c-header__title').length).toEqual(1);
  expect(element.find('.c-header__title').text()).toEqual('Test');
});

it('does not render title if not availble', () => {
  const element = shallowWithApplicationState(<Header />, Object.assign(mockApplicationState(), { title: null }));

  expect(element.find('.c-header__title').length).toEqual(0);
});

it('renders logo if availble', () => {
  const element = shallowWithApplicationState(<Header />, mockApplicationState());

  expect(element.find('.c-header__logo').length).toEqual(1);
});

it('does not render logo if not availble', () => {
  const element = shallowWithApplicationState(<Header />, Object.assign(mockApplicationState(), { logo: null }));

  expect(element.find('.c-header__logo').length).toEqual(0);
});
