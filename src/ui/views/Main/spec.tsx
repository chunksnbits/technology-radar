import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MainView } from './index';

import { mockApplicationStateStore, shallowWithApplicationState } from 'mocks';
import { Header } from 'core/ui/modules/Header';
import { TechnologyGraph } from 'core/ui/modules/TechnologyGraph';
import { Footer } from 'core/ui/modules/Footer';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithApplicationState(<MainView />, mockApplicationStateStore())

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('renders technology radar', () => {
  const element = shallowWithApplicationState(<MainView />, mockApplicationStateStore());
  expect(element.containsMatchingElement(<TechnologyGraph />)).toEqual(true);
});

it('renders header', () => {
  const element = shallowWithApplicationState(<MainView />, mockApplicationStateStore());
  expect(element.containsMatchingElement(<Header />)).toEqual(true);
});

it('renders footer', () => {
  const element = shallowWithApplicationState(<MainView />, mockApplicationStateStore());
  expect(element.containsMatchingElement(<Footer />)).toEqual(true);
});
