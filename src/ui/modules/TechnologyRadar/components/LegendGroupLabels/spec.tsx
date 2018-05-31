
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { LegendGroupLabelsComponent as LegendGroupLabels } from './index';
import { shallow } from 'enzyme';
import { mockTechnologyRadarStore, mockGroup, mockApplicationStateStore } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders group labels', () => {
  const element = shallow(
    <LegendGroupLabels
      technologyRadar={ mockTechnologyRadarStore({
        groups: [mockGroup({ name: 'Test' })]
      }) }
      applicationState={ mockApplicationStateStore() } />
  );

  expect(element.exists()).toBeTruthy();
  expect(element.find('.c-legend-group-labels').length).toBe(1);
  expect(element.text()).toContain('Test');
});

it('triggers selectGroup prop on group click', () => {
  const selectGroup = jasmine.createSpy();

  const element = shallow(
    <LegendGroupLabels
      technologyRadar={
        mockTechnologyRadarStore({
          groups: [mockGroup({ name: 'Test' })]
        })
      }
      applicationState={
        mockApplicationStateStore({
          selectGroup
        })
      }/>
  );

  element.find('.c-legend-group-labels__label').simulate('click');

  expect(selectGroup).toHaveBeenCalled();
});
