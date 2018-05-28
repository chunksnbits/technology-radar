import { cloneElement, ReactElement } from 'react';

import { ShallowWrapper, mount, shallow, ReactWrapper } from 'enzyme';
import { uuid } from 'utils/uuid';

export const mockApplicationState = (patch = {}) => Object.assign({}, {
  title: 'Any',
  logo: '//any.logo.svg',
  editMode: false,
  data: {
    technologies: [],
    groups: [],
  },
  selectedTechnology: null
}, patch) as ApplicationState;

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
