
// ----------------------------------------------------------------------------- Dependencies
import { ApplicationStateImpl } from './index';
import { mockTechnology, mockGroup } from 'mocks';
import { TechnologyRadarImpl } from '../technology-radar';

// ----------------------------------------------------------------------------- Implementation
it('initializes application state', () => {
  const state = new ApplicationStateImpl();

  expect(state.technologyRadar instanceof TechnologyRadarImpl).toBeTruthy();
  expect(state.selectedTechnology).toBeNull();
  expect(state.selectedGroup).toBeNull();
});

it('applies initialState', () => {
  const technologies = [mockTechnology()];
  const groups = [mockGroup()];
  const [selectedTechnology] = technologies;
  const [selectedGroup] = groups;

  const state = new ApplicationStateImpl({
    data: {
      technologies,
      groups,
    },
    selectedTechnology,
    selectedGroup,
    editMode: false
  });

  expect(state.selectedTechnology).toEqual(selectedTechnology);
  expect(state.selectedGroup).toEqual(selectedGroup);

  expect(state.technologyRadar.technologies).toEqual(technologies);
  expect(state.technologyRadar.groups).toEqual(groups);

  expect(state.editMode).toEqual(false);

  expect(state.technologyRadar).not.toBeNull();
});

it('updates selectedTechnology on selectTechnology', () => {
  const technologies = [mockTechnology()];
  const [selected] = technologies;
  const state = new ApplicationStateImpl({ data: { technologies } });

  expect(state.selectedTechnology).toBeNull();

  state.selectTechnology(selected);

  expect(state.selectedTechnology.id).toBe(selected.id);
});

it('updates selectedGroup on selectGroup', () => {
  const groups = [mockGroup()];
  const [selected] = groups;
  const state = new ApplicationStateImpl({ data: { groups } });

  expect(state.selectedGroup).toBeNull();

  state.selectGroup(selected);

  expect(state.selectedGroup.id).toBe(selected.id);
});

it('updates editMode on setEditMode', () => {
  const state = new ApplicationStateImpl({ editMode: false });

  state.setEditMode(true);

  expect(state.editMode).toEqual(true);
});

it('sets new group as selected on addGroup', () => {
  const state = new ApplicationStateImpl({
    technologyRadar: {
      technologies: [],
      groups: []
    }
  });

  state.setEditMode(true);
  state.technologyRadar.addGroup();

  expect(state.selectedGroup.id).toEqual(state.technologyRadar.groups[0].id);
});


it('sets new technology as selected on addTechnology', () => {
  const state = new ApplicationStateImpl({
    technologyRadar: {
      technologies: [],
      groups: [mockGroup()]
    }
  });

  const [group] = state.technologyRadar.groups;

  state.setEditMode(true);
  state.technologyRadar.addTechnology(group);

  expect(state.selectedTechnology.id).toEqual(state.technologyRadar.technologies[0].id);
});
