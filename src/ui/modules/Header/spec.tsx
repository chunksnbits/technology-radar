import 'mocks/replace-consume';
import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Header } from './index';
import { shallow } from 'enzyme';

import { mockApplicationState, createClasses, extractSelectors } from 'mocks';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);
const selectors = extractSelectors(classes);

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {

  const element = shallow(<Header classes={ classes } { ...mockApplicationState() } />);

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('renders title if available', () => {
  const element = shallow(<Header classes={ classes } { ...mockApplicationState({ title: 'Test' }) } />);

  expect(element.find(selectors.headerTitle).length).toEqual(1);
  expect(element.find(selectors.headerTitle).text()).toEqual('Test');
});

it('does not render title if not availble', () => {
  const element = shallow(<Header classes={ classes } { ...mockApplicationState({ title: null }) } />);

  expect(element.find(selectors.headerTitle).length).toEqual(0);
});

it('renders logo if availble', () => {
  const element = shallow(<Header classes={ classes } { ...mockApplicationState() } />);

  expect(element.find(selectors.headerLogo).length).toEqual(1);
});

it('does not render logo if not availble', () => {
  const element = shallow(<Header classes={ classes } { ...mockApplicationState({ logo: null }) } />);

  expect(element.find(selectors.headerLogo).length).toEqual(0);
});
