import 'mocks/replace-consume';
import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { createClasses, noop, mockTechnology } from 'mocks';
import { Header } from 'core/ui/modules/Header';
import { TechnologyGraph } from 'core/ui/modules/TechnologyGraph';
import { Footer } from 'core/ui/modules/Footer';

import { MainView, MainViewProps } from './index';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration

const classes = createClasses(styles);

const withProps = (props: Partial<MainViewProps> = {}): MainViewProps => ({
  editor: false,
  selectedTechnology: mockTechnology(),
  viewMode: 'radar',
  selectTechnology: noop,
  classes,
  ...props,
});

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(<MainView { ...withProps() } />);

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('renders technology radar', () => {
  const element = shallow(<MainView { ...withProps() } />);
  expect(element.containsMatchingElement(<TechnologyGraph />)).toEqual(true);
});

it('renders header', () => {
  const element = shallow(<MainView { ...withProps() } />);
  expect(element.containsMatchingElement(<Header />)).toEqual(true);
});

it('renders footer', () => {
  const element = shallow(<MainView { ...withProps() } />);
  expect(element.containsMatchingElement(<Footer />)).toEqual(true);
});
