import { cloneElement, ReactElement } from 'react';

import { ShallowWrapper, mount, shallow, ReactWrapper } from 'enzyme';

export const mockApplicationState = (patch = {}) => Object.assign({}, {
  title: 'Any',
  logo: '//any.logo.svg',
  editMode: false,
  data: {
    technologies: [],
    groups: [],
  },
  selectedTechnology: null
}, patch) as any;

export const mockTechnology = (patch = {}) => Object.assign({}, {
  id: 'any',
  name: 'Any',
  level: 2,
  group: 3,
  logo: '//any.logo.svg',
  description: []
}, patch) as any;

export const mockGroup = (patch = {}) => Object.assign({}, {
  id: 'any',
  group: 0,
  name: 'Any',
  color: 'red'
}, patch) as any;

export const mockSettings = (patch = {}) => Object.assign({}, {
  innerRadius: 10,
  outerRadius: 50
}, patch) as any;

export const shallowWithApplicationState = (element: ReactElement<any>, applicationState: any = {}): ShallowWrapper<any, any> => {
  return shallow(cloneElement(element, { applicationState }));
}

export const mountWithApplicationState = (element: ReactElement<any>, applicationState: any = {}): ReactWrapper<any, any> => {
  return mount(cloneElement(element, { applicationState }));
}
