
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { TechnologyRadarStoreComponent as TechnologyRadarStore } from './index';
import { ApplicationStateStore } from '../application-state';
import { mockTechnology, mockGroup, noop } from 'mocks';
import { shallow } from 'enzyme';

function mountStore(initialState = {}, applicationState = null) {
  if (applicationState === null) {
    applicationState = shallow(<ApplicationStateStore />).state();
  }

  return shallow(<TechnologyRadarStore
    initialState={ initialState }
    applicationState={ applicationState }
  />);
}

// ----------------------------------------------------------------------------- Implementation
it('initializes TechnologyRadarStore state', () => {
  const element = mountStore();

  expect(Array.isArray(element.state().technologies)).toBeTruthy();
  expect(Array.isArray(element.state().groups)).toBeTruthy();
});

it('applies initialState', () => {
  const technologies = [mockTechnology()];
  const groups = [mockGroup()];

  const element = mountStore({ technologies, groups });

  expect(element.state().technologies.length).toBe(1);
  expect(element.state().technologies[0]).toEqual(technologies[0]);

  expect(element.state().groups.length).toBe(1);
  expect(element.state().groups[0]).toEqual(groups[0]);
});

it('inializes edited data on setEditMode', () => {
  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  });

  const [group] = element.state().groups;

  element.state().updateGroup(group, 'name', 'Changed');

  expect(element.state().groups[0].name).toEqual('Changed');
  expect(group.name).not.toEqual('Changed');
});

it('updates group on updateGroup', () => {
  const element = mountStore({ groups: [mockGroup()] });

  const [group] = element.state().groups;
  element.state().updateGroup(group, 'name', 'Changed');

  expect(element.state().groups[0].name).toEqual('Changed');
});

it('updates technologies on updateTechnology', () => {
  const element = mountStore({ technologies: [mockTechnology()] });

  const [technology] = element.state().technologies;
  element.state().updateTechnology(technology, 'name', 'Changed');

  expect(element.state().technologies[0].name).toEqual('Changed');
});

it('creates new technology radar on createNew', () => {
  const element = mountStore({ groups: [mockGroup()] });
  const state = (element.state() as TechnologyRadarActions);
  state.createNew();

  expect(element.state().groups.length).toBeGreaterThan(0);
  expect(element.state().technologies.length).toBeGreaterThan(0);
  expect(element.state()).not.toEqual(state);
});

it('sets edit mode on createNew', (done) => {
  const mockApplicationState = {
    setOwner: noop,
    setEditMode: (value) => {
      expect(value).toEqual(true);
      done();
    }
  };

  const element = mountStore({ groups: [mockGroup()] }, mockApplicationState);
  const state = (element.state() as TechnologyRadarActions);

  state.createNew();
});

it('sets owner on createNew', (done) => {
  const mockApplicationState = {
    setOwner: (value) => {
      expect(value).toEqual(true);
      done();
    },
    setEditMode: noop
  };

  const element = mountStore({ groups: [mockGroup()] }, mockApplicationState);
  const state = (element.state() as TechnologyRadarActions);

  state.createNew();
});

it('notifies application on edit', (done) => {
  const mockApplicationState = {
    setEditMode: (value) => {
      expect(value).toEqual(true);
      done();
    }
  };

  const element = mountStore({ groups: [mockGroup()] }, mockApplicationState);
  const state = (element.state() as TechnologyRadarActions);

  state.edit();
});

it('adds group on addGroup', () => {
  const element = mountStore({ groups: [mockGroup()] });
  element.state().addGroup();

  expect(element.state().groups.length).toEqual(2);
});

it('adds technology on addTechnology', () => {
  const element = mountStore({
    technologies: [mockTechnology()],
    groups: [mockGroup()]
  });

  element.state().addTechnology(element.state().groups[0]);

  expect(element.state().technologies.length).toEqual(2);
});

it('removes all groups and technologies on clearAll', () => {
  const element = mountStore({
    technologies: [mockTechnology()],
    groups: [mockGroup()]
  });

  element.state().clearAll();

  expect(element.state().groups.length).toEqual(0);
  expect(element.state().technologies.length).toEqual(0);
});
