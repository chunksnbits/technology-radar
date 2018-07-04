
// ----------------------------------------------------------------------------- Dependencies
import { uuid } from 'utils/uuid';

// ----------------------------------------------------------------------------- Implementation
export const mockApplicationState = (patch: Partial<ApplicationState> = {}) => ({
  title: 'Any',
  logo: '//any.logo.svg',
  breakpoint: 'large',
  viewMode: 'list',
  ...patch,
});

export const mockTechnologyRadar = (patch: Partial<TechnologyRadarState> = {}): TechnologyRadarState => ({
  technologies: [mockTechnology()],
  groups: [mockGroup()],
  settings: mockSettings(),
  ...patch,
});

export const mockTechnology = (patch: Partial<Technology> = {}): Technology => ({
  id: uuid(),
  name: 'Any',
  groupId: null,
  level: 2,
  logo: '//any.logo.svg',
  description: null,
  ...patch,
});

export const mockLevel = (patch: Partial<Level> = {}): Level => ({
  id: uuid(),
  name: 'Any',
  ...patch,
});

export const mockGroup = (patch: Partial<Group> = {}) => ({
  id: uuid(),
  group: 0,
  name: 'Any',
  color: 'red',
  description: null,
  ...patch,
});

export const mockSettings = (patch: Partial<TechnologyRadarSettings> = {}): TechnologyRadarSettings => ({
  innerRadiusPercent: 10,
  outerRadiusPercent: 50,
  ...patch,
});
