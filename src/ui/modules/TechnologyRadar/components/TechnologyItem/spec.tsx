
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, render } from 'enzyme';

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
const renderWithProps = (props: any = {}) => render(createWithProps(props));

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithProps();
  expect(element.find('.c-technology-item')).toBeTruthy();
});

it('renders item in right color', () => {
  const element = shallowWithProps({
    technology: mockTechnology({ id: 'test' }),
    groups: [mockGroup({ id: 'test', color: 'red' })]
  });

  const button = element.find('.c-technology-item__item').render();

  expect(button.css('border-color')).toEqual('red');
});

it('triggers onSelect on item click', () => {
  const technology = mockTechnology({ id: 'test' });
  const onSelect = jasmine.createSpy();

  const element = shallowWithProps({
    technology,
    onSelect
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
    groups: [mockGroup(), group]
  });

  button = element.find('.c-technology-item').render();
  // 2 groups, 1 element in group
  expect(button.css('transform')).toEqual(`rotateZ(${ 360 / 2 / 2 }deg)`);

  element = shallowWithProps({
    technology,
    technologies: [technology,mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
    groups: [mockGroup(), group, mockGroup()]
  });

  button = element.find('.c-technology-item').render();
  // 3 groups, 3 elements in group
  expect(button.css('transform')).toEqual(`rotateZ(${ 360 / 3 / 4 }deg)`);
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
    groups: [mockGroup(), group]
  });

  const neighbor = shallowWithProps({
    technology: technologies[1],
    technologies,
    groups: [mockGroup(), group]
  });

  const buttons = [
    sample.find('.c-technology-item').render(),
    neighbor.find('.c-technology-item').render()
  ];

  // 2 groups, 1 element in group
  expect(buttons[0].css('width')).not.toEqual(buttons[1].css('width'))
});
