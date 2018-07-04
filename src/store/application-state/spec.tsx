
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { ApplicationStateProvider } from './index';
import { mockTechnology, mockGroup } from 'mocks';
import { shallow } from 'enzyme';

// ----------------------------------------------------------------------------- Implementation
it('initializes application state', () => {
  const element = shallow(<ApplicationStateProvider />);
  const state = element.state() as ApplicationStateStore;

  expect(state.selectedTechnology).toBeNull();
  expect(state.selectedGroup).toBeNull();
});

it('applies initialState', () => {
  const technologies = [mockTechnology()];
  const groups = [mockGroup()];
  const [selectedTechnology] = technologies;
  const [selectedGroup] = groups;

  const element = shallow(<ApplicationStateProvider state={{
    selectedTechnology,
    selectedGroup,
  }} />);

  const state = element.state() as ApplicationStateStore;

  expect(state.selectedTechnology).toEqual(selectedTechnology);
  expect(state.selectedGroup).toEqual(selectedGroup);
});

it('updates selectedTechnology on selectTechnology', () => {
  const technologies = [mockTechnology()];
  const [selected] = technologies;
  const element = shallow(<ApplicationStateProvider />);
  const state = element.state() as ApplicationStateStore;

  expect(state.selectedTechnology).toBeNull();

  state.selectTechnology(selected);

  const updatedState = element.state() as ApplicationStateStore;

  expect(updatedState.selectedTechnology.id).toBe(selected.id);
});

it('updates selectedGroup on selectGroup', () => {
  const groups = [mockGroup()];
  const [selected] = groups;
  const element = shallow(<ApplicationStateProvider />);
  const state = element.state() as ApplicationStateStore;

  expect(state.selectedGroup).toBeNull();

  state.selectGroup(selected);

  const updatedState = element.state() as ApplicationStateStore;

  expect(updatedState.selectedGroup.id).toBe(selected.id);
});
