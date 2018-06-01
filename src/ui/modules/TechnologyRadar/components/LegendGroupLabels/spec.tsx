
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { LegendGroupLabels } from './index';
import { shallow } from 'enzyme';
import { mockGroup, noop } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders group labels', () => {
  const element = shallow(
    <LegendGroupLabels
      groups={ [mockGroup({ name: 'Test' })] }
      onSelect={ noop } />
  );

  expect(element.exists()).toBeTruthy();
  expect(element.find('.c-legend-group-labels').length).toBe(1);
  expect(element.text()).toContain('Test');
});

it('triggers selectGroup prop on group click', () => {
  const selectGroup = jasmine.createSpy();

  const element = shallow(
    <LegendGroupLabels
      groups={ [mockGroup({ name: 'Test' })] }
      onSelect={ selectGroup } />
  );

  element.find('.c-legend-group-labels__label').simulate('click', new Event('click'));

  expect(selectGroup).toHaveBeenCalled();
});
