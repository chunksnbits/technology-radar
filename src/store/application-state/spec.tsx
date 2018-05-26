
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { ApplicationStateStore } from './index';
import { mockTechnology, mockGroup } from 'mocks';
import { shallow } from 'enzyme';

// ----------------------------------------------------------------------------- Implementation
it('initializes application state', () => {
  const element = shallow(<ApplicationStateStore />);
  const state = element.state();

  expect(state.selectedTechnology).toBeNull();
  expect(state.selectedGroup).toBeNull();
});

it('applies initialState', () => {
  const technologies = [mockTechnology()];
  const groups = [mockGroup()];
  const [selectedTechnology] = technologies;
  const [selectedGroup] = groups;

  const element = shallow(<ApplicationStateStore initialState={{
    selectedTechnology,
    selectedGroup,
    editMode: true
  }} />);

  const state = element.state();

  expect(state.selectedTechnology).toEqual(selectedTechnology);
  expect(state.selectedGroup).toEqual(selectedGroup);
  expect(state.editMode).toEqual(true);
});

it('updates selectedTechnology on selectTechnology', () => {
  const technologies = [mockTechnology()];
  const [selected] = technologies;
  const element = shallow(<ApplicationStateStore />);
  const state = element.state();

  expect(state.selectedTechnology).toBeNull();

  state.selectTechnology(selected);

  expect(element.state().selectedTechnology.id).toBe(selected.id);
});

it('updates selectedGroup on selectGroup', () => {
  const groups = [mockGroup()];
  const [selected] = groups;
  const element = shallow(<ApplicationStateStore />);
  const state = element.state();

  expect(state.selectedGroup).toBeNull();

  state.selectGroup(selected);

  expect(element.state().selectedGroup.id).toBe(selected.id);
});

it('updates editMode on setEditMode', () => {
  const element = shallow(<ApplicationStateStore initialState={{ editMode: false }} />);
  const state = element.state();

  state.setEditMode(true);

  expect(element.state().editMode).toEqual(true);
});