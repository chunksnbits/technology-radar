import { cloneElement, ReactElement } from 'react';

import { ShallowWrapper, mount, shallow, ReactWrapper } from 'enzyme';
import { uuid } from 'utils/uuid';
import { noop } from './generic.mock';

export const mockApplicationState = (patch = {}) => Object.assign({}, {
  title: 'Any',
  logo: '//any.logo.svg',
  editMode: false,
  data: {
    technologies: [],
    groups: [],
  }
}, patch) as ApplicationState;

export const mockApplicationStateStore = (patch = {}) => Object.assign({}, {
  selectedTechnology: null,
  selectTechnology: noop,
  selectGroup: noop,
  reset: noop,

  setOwner: noop,
  setEditMode: noop,

  ...mockApplicationState(patch),
}, patch) as ApplicationStateStore;

export const mockTechnologyRadar = (patch = {}) => Object.assign({}, {
  technologies: [mockTechnology()],
  groups: [mockGroup()],

  edited: false,
  settings: mockSettings(),
}, patch) as TechnologyRadar;

export const mockTechnologyRadarStore = (patch = {}) => Object.assign({}, {
  createNew: noop,
  edit: noop,

  addGroup: noop,
  addTechnology: noop,

  updateGroup: noop,
  updateTechnology: noop,

  removeGroup: noop,
  removeTechnology: noop,

  clearAll: noop,

  ...mockTechnologyRadar(patch),
}, patch) as TechnologyRadarStore;

export const mockTechnology = (patch = {}) => Object.assign({}, {
  id: uuid(),
  name: 'Any',
  groupId: null,
  level: 2,
  group: 3,
  logo: '//any.logo.svg',
  description: null
}, patch) as Technology;

export const mockGroup = (patch = {}) => Object.assign({}, {
  id: uuid(),
  group: 0,
  name: 'Any',
  color: 'red',
  description: null
}, patch) as Group;

export const mockSettings = (patch = {}) => Object.assign({}, {
  innerRadiusPercent: 10,
  outerRadiusPercent: 50
}, patch) as TechnologyRadarSettings;

export const shallowWithApplicationState = (element: ReactElement<any>, applicationState: any = {}): ShallowWrapper<any, any> => {
  return shallow(cloneElement(element, { applicationState }));
}

export const mountWithApplicationState = (element: ReactElement<any>, applicationState: any = {}): ReactWrapper<any, any> => {
  return mount(cloneElement(element, { applicationState }));
}
