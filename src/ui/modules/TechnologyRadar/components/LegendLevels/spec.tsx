
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { mockTechnology, mockTechnologyRadarStore } from 'mocks';

import { LegendLevelsComponent as LegendLevels } from './index';

// ----------------------------------------------------------------------------- Implementation
it('renders element', () => {
  const element = shallow(
    <LegendLevels
      technologyRadar={
        mockTechnologyRadarStore({
          technologies: [mockTechnology(), mockTechnology({ level: 2 })]
        })
      } />
  );

  expect(element.exists()).toBeTruthy();
  expect(element.find('.c-legend-levels').length).toBe(1);
});

it('renders levels', () => {
  const element = shallow(
    <LegendLevels
      technologyRadar={
        mockTechnologyRadarStore({
          technologies: [mockTechnology(), mockTechnology({ level: 2 })]
        })
      } />
  );

  expect(element.find('.c-legend-levels__level').length).toBe(2);
});
