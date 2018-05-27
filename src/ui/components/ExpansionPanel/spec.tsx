
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody, ExpansionPanelFooter } from './index';
import { noop } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <ExpansionPanel active={ false } onToggle={ noop } />
  );

  expect(element.exists).toBeTruthy();
});

it('calls onToggle when header is clicked', () => {
  const spyOnToggle = jasmine.createSpy();

  const element = shallow(
    <ExpansionPanel active={ false } onToggle={ spyOnToggle }>
      <ExpansionPanelHeader />
    </ExpansionPanel>
  );

  const header = element.find('.c-expansion-panel__header');
  header.simulate('click');

  expect(spyOnToggle).toBeCalledWith(true);
});

it('calls onToggle with inverse active value', () => {
  const spyOnToggle = jasmine.createSpy();

  const element = shallow(
    <ExpansionPanel active={ true } onToggle={ spyOnToggle }>
      <ExpansionPanelHeader />
    </ExpansionPanel>
  );

  const header = element.find('.c-expansion-panel__header');
  header.simulate('click');

  expect(spyOnToggle).toBeCalledWith(false);
});

it('renders active modification if active', () => {
  const element = shallow(<ExpansionPanel active={ true } onToggle={ noop } />);

  expect(element.find('.c-expansion-panel--active').length).toEqual(1);
});

it('renders header if provided', () => {
  const element = shallow(
    <ExpansionPanel active={ false } onToggle={ noop }>
      <ExpansionPanelHeader />
    </ExpansionPanel>
  );
  expect(element.containsMatchingElement(<ExpansionPanelHeader />)).toEqual(true);
});

it('renders body if provided', () => {
  const element = shallow(
    <ExpansionPanel active={ false } onToggle={ noop }>
      <ExpansionPanelBody />
    </ExpansionPanel>
  );
  expect(element.containsMatchingElement(<ExpansionPanelBody />)).toEqual(true);
});

it('renders footer if provided', () => {
  const element = shallow(
    <ExpansionPanel active={ false } onToggle={ noop }>
      <ExpansionPanelFooter />
    </ExpansionPanel>
  );
  expect(element.containsMatchingElement(<ExpansionPanelFooter />)).toEqual(true);
});

it('does not render header if not provided', () => {
  const element = shallow(<ExpansionPanel active={ false } onToggle={ noop } />);
  expect(element.containsMatchingElement(<ExpansionPanelHeader />)).toEqual(false);
});

it('does not render body if not provided', () => {
  const element = shallow(<ExpansionPanel active={ false } onToggle={ noop } />);
  expect(element.containsMatchingElement(<ExpansionPanelBody />)).toEqual(false);
});

it('does not render footer if not provided', () => {
  const element = shallow(<ExpansionPanel active={ false } onToggle={ noop } />);
  expect(element.containsMatchingElement(<ExpansionPanelFooter />)).toEqual(false);
});
