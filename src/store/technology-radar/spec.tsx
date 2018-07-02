import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { TechnologyRadarProvider } from './index';
import { ApplicationStateProvider } from '../application-state';
import { mockTechnology, mockGroup, noop } from 'mocks';
import { shallow } from 'enzyme';

// ----------------------------------------------------------------------------- Configuration
function mountStore(initialState = {},
applicationState = null) {
  if (applicationState === null) {
    applicationState = shallow(<ApplicationStateProvider />).state();
  }

  return shallow(<TechnologyRadarProvider
    initialState={ initialState }
    applicationState={ applicationState }
  />);
}

// ----------------------------------------------------------------------------- Implementation
it('initializes TechnologyRadarStoreProvider state',
() => {
  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  });

  const state = element.state() as TechnologyRadarStore;

  expect(Array.isArray(state.technologies)).toBeTruthy();
  expect(Array.isArray(state.groups)).toBeTruthy();
});

it('applies initialState',
() => {
  const technologies = [mockTechnology()];;
  const groups = [mockGroup()];

  const element = mountStore({
    technologies,
    groups
  });

  const state = element.state() as TechnologyRadarStore;

  expect(state.technologies.length).toBe(1);
  expect(state.technologies[0]).toEqual(technologies[0]);

  expect(state.groups.length).toBe(1);
  expect(state.groups[0]).toEqual(groups[0]);
});

it('inializes edited data on setEditMode',
() => {
  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  });

  const state = element.state() as TechnologyRadarStore;

  const [group] = state.groups;

  state.updateGroup(group,
  'name',
  'Changed');

  expect(state.groups[0].name).toEqual('Changed');
  expect(group.name).not.toEqual('Changed');
});

it('updates group on updateGroup',
() => {
  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  });

  const state = element.state() as TechnologyRadarStore;

  const [group] = state.groups;
  state.updateGroup(group,
  'name',
  'Changed');

  expect(state.groups[0].name).toEqual('Changed');
});

it('updates technologies on updateTechnology',
() => {
  const element = mountStore({
    technologies: [mockTechnology()]
  });

  const state = element.state() as TechnologyRadarStore;

  const [technology] = state.technologies;
  state.updateTechnology(technology,
  'name',
  'Changed');

  expect(state.technologies[0].name).toEqual('Changed');
});

it('creates new technology radar on createNew',
() => {
  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  });

  const state = element.state() as TechnologyRadarStore;

  state.createNew();

  expect(state.groups.length).toBeGreaterThan(0);
  expect(state.technologies.length).toBeGreaterThan(0);
  expect(state).not.toEqual(state);
});

it('sets edit mode on createNew',
(done) => {
  const mockApplicationState = {
    setOwner: noop,
    setEditMode: (value) => {
      expect(value).toEqual(true);
      done();
    }
  };

  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  },  mockApplicationState);

  const state = element.state() as TechnologyRadarStore;

  state.createNew();
});

it('sets owner on createNew',
(done) => {
  const mockApplicationState = {
    setOwner: (value) => {
      expect(value).toEqual(true);
      done();
    },
    setEditMode: noop
  };

  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  }, mockApplicationState);

  const state = element.state() as TechnologyRadarStore;

  state.createNew();
});

it('notifies application on edit',
(done) => {
  const mockApplicationState = {
    setEditMode: (value) => {
      expect(value).toEqual(true);
      done();
    }
  };

  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  }, mockApplicationState);

  const state = element.state() as TechnologyRadarStore;

  state.edit();
});

it('adds group on addGroup',
() => {
  const element = mountStore({
    groups: [mockGroup()],
    technologies: [mockTechnology()]
  });

  const state = element.state() as TechnologyRadarStore;

  state.addGroup();

  expect(state.groups.length).toEqual(2);
});

it('adds technology on addTechnology',
() => {
  const element = mountStore({
    technologies: [mockTechnology()],
    groups: [mockGroup()]
  });

  const state = element.state() as TechnologyRadarStore;

  state.addTechnology(state.groups[0]);

  expect(state.technologies.length).toEqual(2);
});

it('removes all groups and technologies on clearAll',
() => {
  const element = mountStore({
    technologies: [mockTechnology()],
    groups: [mockGroup()]
  });

  const state = element.state() as TechnologyRadarStore;

  state.clearAll();

  expect(state.groups.length).toEqual(0);
  expect(state.technologies.length).toEqual(0);
});
