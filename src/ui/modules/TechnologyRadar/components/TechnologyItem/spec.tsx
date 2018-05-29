
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { TechnologyItem } from './index';

import { mockTechnology, mockGroup, mockSettings, noop } from 'mocks';

// ----------------------------------------------------------------------------- Configuration
const createWithProps = (props: any = {}) => {
  return (
    <TechnologyItem
      technology={ props.technology || mockTechnology() }
      group={ props.group || mockGroup() }
      technologies={ props.technologies || [mockTechnology()] }
      groups={ props.groups || [mockGroup()] }
      settings={ props.settings || mockSettings() }
      onSelect={ props.onSelect || noop } />
  );
}

const shallowWithProps = (props: any = {}) => shallow(createWithProps(props));

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithProps();
  expect(element.find('.c-technology-item')).toBeTruthy();
});

it('renders item in right color', () => {
  const group = mockGroup({ id: 'test', color: 'red' });
  const element = shallowWithProps({
    technology: mockTechnology({ id: 'test' }),
    groups: [group],
    group
  });

  const button = element.find('.c-technology-item__item').render();

  expect(button.css('border-color')).toEqual('red');
});

it('triggers onSelect on item click', () => {
  const technology = mockTechnology({ id: 'test' });
  const onSelect = jasmine.createSpy();
  const group = mockGroup({ id: 'test', color: 'red' });

  const element = shallowWithProps({
    technology,
    onSelect,
    groups: [group],
    group
  });

  const button = element.find('button');
  button.simulate('click');

  expect(onSelect).toHaveBeenCalledWith(technology);
});

it('renders item in right position', () => {
  const group = mockGroup({ id: 'test' });
  const technology = mockTechnology({ id: 'test', groupId: group.id });

  let element;
  let button;

  element = shallowWithProps({
    technology,
    technologies: [mockTechnology(), technology],
    groups: [mockGroup(), group],
    group
  });

  button = element.find('.c-technology-item').render();
  expect(button.css('transform')).toEqual(`rotateZ(90deg)`);

  element = shallowWithProps({
    technology,
    technologies: [technology,mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
    groups: [mockGroup(), group, mockGroup()],
    group
  });

  button = element.find('.c-technology-item').render();
  expect(button.css('transform')).toEqual(`rotateZ(270deg)`);
});

it('offsets items within same group', () => {
  const group = mockGroup({ id: 'test' });
  const technologies = [
    mockTechnology({ id: 'one', groupId: group.id }),
    mockTechnology({ id: 'two', groupId: group.id })
  ];

  const sample = shallowWithProps({
    technology: technologies[0],
    technologies,
    groups: [mockGroup(), group],
    group
  });

  const other = shallowWithProps({
    technology: technologies[1],
    technologies,
    groups: [mockGroup(), group],
    group
  });

  const buttons = [
    sample.find('.c-technology-item').render(),
    other.find('.c-technology-item').render()
  ];

  // 2 groups, 1 element in group
  expect(buttons[0].css('width')).not.toEqual(buttons[1].css('width'))
});

it('offsets items to the right base position same group', () => {
  const groups = [
    mockGroup({ id: 'group-one' }),
    mockGroup({ id: 'group-two' })
  ];

  const technologies = [
    mockTechnology({ id: 'one', groupId: 'group-one' }),
    mockTechnology({ id: 'two', groupId: 'group-two' })
  ];

  const sample = shallowWithProps({
    technology: technologies[0],
    technologies,
    group: groups[0],
    groups
  });

  const other = shallowWithProps({
    technology: technologies[1],
    technologies,
    group: groups[1],
    groups
  });

  expect(sample.render().css('transform')).toContain('rotateZ(270deg)');
  expect(other.render().css('transform')).toContain('rotateZ(90deg)');

  // 2 groups, 1 element in group
  // expect(buttons[0].css('width')).not.toEqual(buttons[1].css('width'))
});