export const mockApplicationState = (patch = {}) => Object.assign({}, {
  title: 'Any',
  logo: null,
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
