import * as React from 'react';
import { shallow } from 'enzyme';
import { Legend } from './index';

import { mockTechnology, mockGroup } from 'mocks';

it('renders without crashing', () => {
  const element = shallow(
    <Legend technologies={ [] } groups={[]} />
  );
  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('renders legend', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology()] }
      groups={ [mockGroup()] } />
  );

  expect(element.find('.c-legend').length).toBe(1);
});

it('renders levels', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology(), mockTechnology({ level: 2 })] }
      groups={ [mockGroup()] } />
  );

  expect(element.find('.c-legend__level').length).toBe(2);
});

it('renders groups', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology()] }
      groups={ [mockGroup(), mockGroup({ id: 2 })] } />
  );

  expect(element.find('.c-legend__group').length).toBe(2);
});

it('renders group label', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology()] }
      groups={ [mockGroup({ name: 'Test' })] } />
  );

  expect(element.text()).toContain('Test');
});