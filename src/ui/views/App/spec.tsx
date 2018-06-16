import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { App } from './index';

import { mockApplicationState, shallowWithApplicationState } from 'mocks';
import { Header } from 'ui/modules/Header';
import { TechnologyRadar } from 'ui/modules/TechnologyRadar';
import { Footer } from 'ui/modules/Footer';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithApplicationState(<App />, mockApplicationState())

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('renders technology radar', () => {
  const element = shallowWithApplicationState(<App />, mockApplicationState());
  expect(element.containsMatchingElement(<TechnologyRadar />)).toEqual(true);
});

it('renders header', () => {
  const element = shallowWithApplicationState(<App />, mockApplicationState());
  expect(element.containsMatchingElement(<Header />)).toEqual(true);
});

it('renders footer', () => {
  const element = shallowWithApplicationState(<App />, mockApplicationState());
  expect(element.containsMatchingElement(<Footer />)).toEqual(true);
});
