
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { TechnologyRadarStore } from './index';
import { mockTechnology, mockGroup } from 'mocks';
import { mount, shallow } from 'enzyme';

// ----------------------------------------------------------------------------- Implementation
it('initializes TechnologyRadarStore state', () => {
  const element = mount(shallow(<TechnologyRadarStore />).get(0));

  expect(Array.isArray(element.state().technologies)).toBeTruthy();
  expect(Array.isArray(element.state().groups)).toBeTruthy();
});

it('applies initialState', () => {
  const technologies = [mockTechnology()];
  const groups = [mockGroup()];

  const element = mount(shallow(<TechnologyRadarStore
    initialState={{
      technologies,
      groups
    }}
  />).get(0));

  expect(element.state().technologies.length).toBe(1);
  expect(element.state().technologies[0]).toEqual(technologies[0]);

  expect(element.state().groups.length).toBe(1);
  expect(element.state().groups[0]).toEqual(groups[0]);
});

it('inializes edited data on setEditMode', () => {
  const element = mount(shallow(<TechnologyRadarStore
    initialState={{
      groups: [mockGroup()],
      technologies: [mockTechnology()]
    }}
  />).get(0));

  const [group] = element.state().groups;

  element.state().updateGroup(group, 'name', 'Changed');

  expect(element.state().groups[0].name).toEqual('Changed');
  expect(group.name).not.toEqual('Changed');
});

it('updates group on updateGroup', () => {
  const element = mount(shallow(<TechnologyRadarStore initialState={{ groups: [mockGroup()] }} />).get(0));

  const [group] = element.state().groups;
  element.state().updateGroup(group, 'name', 'Changed');

  expect(element.state().groups[0].name).toEqual('Changed');
});

it('updates technologies on updateTechnology', () => {
  const element = mount(shallow(<TechnologyRadarStore initialState={{ technologies: [mockTechnology()] }} />).get(0));

  const [technology] = element.state().technologies;
  element.state().updateTechnology(technology, 'name', 'Changed');

  expect(element.state().technologies[0].name).toEqual('Changed');
});

it('adds group on addGroup', () => {
  const element = mount(shallow(<TechnologyRadarStore initialState={{ groups: [mockGroup()] }} />).get(0));
  element.state().addGroup();

  expect(element.state().groups.length).toEqual(2);
});

it('adds technology on addTechnology', () => {
  const element = mount(shallow(<TechnologyRadarStore
    initialState={{
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }}
  />).get(0));

  element.state().addTechnology(element.state().groups[0]);

  expect(element.state().technologies.length).toEqual(2);
});

it('removes all groups and technologies on clearAll', () => {
  const element = mount(shallow(<TechnologyRadarStore
    initialState={{
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }}
  />).get(0));
  element.state().clearAll();

  expect(element.state().groups.length).toEqual(0);
  expect(element.state().technologies.length).toEqual(0);
});
