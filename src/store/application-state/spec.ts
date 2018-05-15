
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
  expect(state.selectedGroup).toBeNull();
});

it('applies initialState', () => {
  const technologies = [mockTechnology()];
  const groups = [mockGroup()];
  const [selectedTechnology] = technologies;
  const [selectedGroup] = groups;

  const state = new ApplicationState({
    data: {
      technologies,
      groups,
    },
    selectedTechnology,
    selectedGroup,
    editMode: false
  });

  expect(state.technologies.length).toBe(1);
  expect(state.technologies[0]).toEqual(technologies[0]);

  expect(state.groups.length).toBe(1);
  expect(state.groups[0]).toEqual(groups[0]);

  expect(state.selectedTechnology).toEqual(selectedTechnology);
  expect(state.selectedGroup).toEqual(selectedGroup);

  expect(state.editMode).toEqual(false);
});

it('updates selectedTechnology on selectTechnology', () => {
  const technologies = [mockTechnology()];
  const [selected] = technologies;
  const state = new ApplicationState({ data: { technologies } });

  expect(state.selectedTechnology).toBeNull();

  state.selectTechnology(selected);

  expect(state.selectedTechnology.id).toBe(selected.id);
});

it('updates selectedGroup on selectGroup', () => {
  const groups = [mockGroup()];
  const [selected] = groups;
  const state = new ApplicationState({ data: { groups } });

  expect(state.selectedGroup).toBeNull();

  state.selectGroup(selected);

  expect(state.selectedGroup.id).toBe(selected.id);
});

it('updates editMode on setEditMode', () => {
  const state = new ApplicationState({ editMode: false });

  state.setEditMode(true);

  expect(state.editMode).toEqual(true);
});

it('inializes edited data on setEditMode', () => {
  const state = new ApplicationState({
    editMode: false,
    data: {
      groups: [mockGroup()],
      technologies: [mockTechnology()]
    }
  });

  const [group] = state.groups;

  state.setEditMode(true);

  state.updateGroup(group, 'name', 'Changed');

  expect(state.groups[0].name).toEqual('Changed');
  expect(group.name).not.toEqual('Changed');
});

it('updates group on updateGroup', () => {
  const state = new ApplicationState({ data: { groups: [mockGroup()] } });

  const [group] = state.groups;

  state.setEditMode(true);
  state.updateGroup(group, 'name', 'Changed');

  expect(state.groups[0].name).toEqual('Changed');
});

it('updates technologies on updateTechnology', () => {
  const state = new ApplicationState({ data: { technologies: [mockTechnology()] } });

  const [technology] = state.technologies;

  state.setEditMode(true);
  state.updateTechnology(technology, 'name', 'Changed');

  expect(state.technologies[0].name).toEqual('Changed');
});
