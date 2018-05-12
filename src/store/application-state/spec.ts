
// ----------------------------------------------------------------------------- Dependencies
import { ApplicationState } from './index';
import { mockTechnology, mockGroup } from 'mocks';
import { isObservableArray } from 'mobx';

// ----------------------------------------------------------------------------- Implementation
it('initializes application state', () => {
  const state = new ApplicationState();


  expect(isObservableArray(state.technologies)).toBeTruthy();
  expect(isObservableArray(state.groups)).toBeTruthy();
  expect(state.selectedTechnology).toBeNull();
});

it('applies initialState', () => {
  const technologies = [mockTechnology()];
  const groups = [mockGroup()];
  const selectedTechnology = technologies[0];

  const state = new ApplicationState({ technologies, groups, selectedTechnology });

  expect(state.technologies.length).toBe(1);
  expect(state.technologies[0]).toEqual(technologies[0]);

  expect(state.groups.length).toBe(1);
  expect(state.groups[0]).toEqual(groups[0]);

  expect(state.selectedTechnology).toEqual(selectedTechnology);
});

it('updates selectedTechnology on selectTechnology', () => {
  const technologies = [mockTechnology()];
  const [selected] = technologies;
  const state = new ApplicationState({ technologies });

  expect(state.selectedTechnology).toBeNull();

  state.selectTechnology(selected);

  expect(state.selectedTechnology.id).toBe(selected.id);
})
