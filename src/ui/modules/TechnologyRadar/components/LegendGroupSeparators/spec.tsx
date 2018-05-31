
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { mockTechnologyRadarStore, mockGroup } from 'mocks';

import { LegendGroupSeparatorsComponent as LegendGroupSeparators } from './index';

// ----------------------------------------------------------------------------- Implementation
it('renders group separators', () => {
  const element = shallow(
    <LegendGroupSeparators
      technologyRadar={
        mockTechnologyRadarStore({
          groups: [mockGroup(), mockGroup({ id: 2 })]
        })
      } />
  );

  expect(element.find('.c-legend-group-separators__separator').length).toBe(2);
});
