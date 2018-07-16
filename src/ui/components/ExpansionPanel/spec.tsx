import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody, ExpansionPanelFooter, ExpansionPanelProps } from '.';
import { noop, createClasses, extractSelectors } from 'mocks';
import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);
const selectors = extractSelectors(classes);

const withProps = (props: Partial<ExpansionPanelProps> = {}) => {
  return {
    active: false,
    onToggle: noop,
    classes,
    ...props,
  }
};

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(<ExpansionPanel { ...withProps() } />);

  expect(element.exists).toBeTruthy();
});

it('calls onToggle when header is clicked', () => {
  const spyOnToggle = jasmine.createSpy();

  const element = shallow(
    <ExpansionPanel { ...withProps({ onToggle: spyOnToggle }) } >
      <ExpansionPanelHeader />
    </ExpansionPanel>,
  );

  const header = element.find(selectors.expansionPanelHeader);
  header.simulate('click');

  expect(spyOnToggle).toBeCalledWith(true);
});

it('calls onToggle with inverse active value', () => {
  const spyOnToggle = jasmine.createSpy();

  const element = shallow(
    <ExpansionPanel { ...withProps({ onToggle: spyOnToggle, active: true }) }>
      <ExpansionPanelHeader />
    </ExpansionPanel>,
  );

  const header = element.find(selectors.expansionPanelHeader);
  header.simulate('click');


  expect(spyOnToggle).toBeCalledWith(false);
});

it('renders active modification if active', () => {
  const element = shallow(<ExpansionPanel { ...withProps({ active: true }) } />);

  expect(element.find(selectors.expansionPanelActive).length).toEqual(1);
});

it('renders header if provided', () => {
  const element = shallow(
    <ExpansionPanel { ...withProps() }>
      <ExpansionPanelHeader />
    </ExpansionPanel>,
  );

  expect(element.containsMatchingElement(<ExpansionPanelHeader />)).toEqual(true);
});

it('renders body if provided', () => {
  const element = shallow(
  <ExpansionPanel { ...withProps({ active: true }) }>
    <ExpansionPanelBody />
  </ExpansionPanel>,
);


  expect(element.containsMatchingElement(<ExpansionPanelBody />)).toEqual(true);
});

it('renders footer if provided', () => {
  const element = shallow(
    <ExpansionPanel { ...withProps() }>
      <ExpansionPanelFooter />
    </ExpansionPanel>,
  );

  expect(element.containsMatchingElement(<ExpansionPanelFooter />)).toEqual(true);
});

it('does not render header if not provided', () => {
  const element = shallow(<ExpansionPanel { ...withProps() } />);
  expect(element.containsMatchingElement(<ExpansionPanelHeader />)).toEqual(false);
});

it('does not render body if not provided', () => {
  const element = shallow(<ExpansionPanel { ...withProps() } />);
  expect(element.containsMatchingElement(<ExpansionPanelBody />)).toEqual(false);
});

it('does not render footer if not provided', () => {
  const element = shallow(<ExpansionPanel { ...withProps() } />);
  expect(element.containsMatchingElement(<ExpansionPanelFooter />)).toEqual(false);
});
