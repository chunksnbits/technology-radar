
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { mockTechnology } from 'mocks';

import { LegendLevels } from './index';

// ----------------------------------------------------------------------------- Implementation
it('renders element', () => {
  const element = shallow(
    <LegendLevels
      technologies={ [mockTechnology(), mockTechnology({ level: 2 })] }
      innerRadiusPercent={ 10 }
      outerRadiusPercent={ 50 } />
  );

  expect(element.exists()).toBeTruthy();
  expect(element.find('.c-legend-levels').length).toBe(1);
});

it('renders levels', () => {
  const element = shallow(
    <LegendLevels
      technologies={ [mockTechnology(), mockTechnology({ level: 2 })] }
      innerRadiusPercent={ 10 }
      outerRadiusPercent={ 50 } />
  );

  expect(element.find('.c-legend-levels__level').length).toBe(2);
});
