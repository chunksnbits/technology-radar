import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { TechnologyRadarProviderComponent } from './index';
import { mockTechnology, mockGroup, mockApplicationState } from 'mocks';
import { shallow } from 'enzyme';

// ---------------------------------------------------------------------------- Implementation
it('initializes TechnologyRadarStoreProvider state', () => {
  const initialState = {
    groups: [mockGroup()],
    technologies: [mockTechnology()],
  };

  const element = shallow(<TechnologyRadarProviderComponent state={ initialState } { ...mockApplicationState() } />);

  const state = element.props().value as TechnologyRadarStore;

  expect(Array.isArray(state.technologies)).toBeTruthy();
  expect(Array.isArray(state.groups)).toBeTruthy();
});

it('applies initialState', () => {
  const initialState = {
    groups: [mockGroup()],
    technologies: [mockTechnology()],
  };

  const element = shallow(<TechnologyRadarProviderComponent state={ initialState } { ...mockApplicationState() } />);

  const state = element.props().value as TechnologyRadarStore;

  expect(state.technologies.length).toBe(1);
  expect(state.technologies[0]).toEqual(initialState.technologies[0]);

  expect(state.groups.length).toBe(1);
  expect(state.groups[0]).toEqual(initialState.groups[0]);
});
