import * as React from 'react';
import { shallow } from 'enzyme';
import { Legend } from './index';

jest.mock('public/data.json', () => ({
  default: {
    groups: [],
    technologies: [],
  }
}));

const mockTechnology = (patch = {}) => Object.assign({
  id: 'any',
  level: 1,
  group: 0,
  name: 'Test',
}, patch) as any;

const mockGroup = (patch = {}) => Object.assign({
  id: 'any',
  name: 'Group',
  group: 0
}, patch) as any;

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