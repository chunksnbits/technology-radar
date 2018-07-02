import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { TechnologyRadarProvider } from './index';
import { ApplicationStateProvider } from '../application-state';
import { mockTechnology, mockGroup } from 'mocks';
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
