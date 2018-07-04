import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, render } from 'enzyme';

import { TechnologyItem, TechnologyItemProps } from './index';

import {
  mockTechnology,
  mockGroup,
  mockSettings,
  noop,
  createClasses,
  extractSelectors,
} from 'mocks';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);
const selectors = extractSelectors(classes);

const withProps = (props: Partial<TechnologyItemProps> = {}) => ({
  technologies: [mockTechnology()],
  groups: [mockGroup()],
  settings: mockSettings(),
  technology: mockTechnology(),
  selected: false,
  focused: false,
  onSelect: noop,
  onMouseOver: noop,
  onMouseOut: noop,
  classes,

  ...props,
});


// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(<TechnologyItem { ...withProps() } />)
  expect(element.find(selectors.root)).toBeTruthy();
});

it('renders item in right color', () => {
  const group = mockGroup({ id: 'test', color: 'red' });
  const element = render(
    <TechnologyItem {
      ...withProps({
        technology: mockTechnology({ id: 'test', groupId: group.id }),
        groups: [group],
        selected: true,
      })
    } />,
  );

  const button = element.find(selectors.technologyItemItem);

  expect(button.css('border-color')).toEqual('red');
});

it('does not crash if technology has not been assigned a group', () => {
  const element = shallow(
    <TechnologyItem {
      ...withProps({
        technology: mockTechnology({ id: 'test', groupId: undefined }),
      })
    } />,
  );

  expect(element.exists).toBeTruthy();
  expect(element.find(selectors.root).length).toBe(0);
});

it('does rerender if element changed', () => {
  const technology = mockTechnology({ id: 'test', groupId: undefined });
  const element = shallow(<TechnologyItem { ...withProps({ technology, selected: false }) } />);

  const renderFnc = spyOn(element.instance() as TechnologyItem, 'render');

  element.setProps({ technology: Object.assign({}, technology), selected: false });

  expect(renderFnc).toHaveBeenCalled();
});

it('does rerender if selected state change', () => {
  const technology = mockTechnology({ id: 'test', groupId: undefined });
  const element = shallow(<TechnologyItem { ...withProps({ technology, selected: true }) } />);

  const renderFnc = spyOn(element.instance() as TechnologyItem, 'render');

  element.setProps({ technology, selected: false });
  expect(renderFnc).toHaveBeenCalled();

  element.setProps({ technology, selected: true });
  expect(renderFnc).toHaveBeenCalled();
});

it('triggers selectTechnology on item click', () => {
  const group = mockGroup({ id: 'test', color: 'red' });
  const selectTechnology = jasmine.createSpy();
  const technology = mockTechnology({ id: 'test', groupId: group.id });

  const element = shallow(
    <TechnologyItem {
      ...withProps({
        technology,
        onSelect: selectTechnology,
        groups: [group],
      })
    } />,
  );

  const button = element.find(selectors.technologyItemItem);
  const event = new Event('noop');
  button.simulate('click', event);

  expect(selectTechnology).toHaveBeenCalledWith(technology, event);
});

it('renders item in right position', () => {
  const technology = mockTechnology({ id: 'test', groupId: 'test' });

  let element;

  element = render(
    <TechnologyItem {
      ...withProps({
      technology,
      technologies: [mockTechnology(), technology],
      groups: [mockGroup(), mockGroup({ id: 'test' })],
      selected: true,
      })
    } />,
  );

  expect(element.css('transform')).toEqual(`rotateZ(270deg)`);

  element = render(
    <TechnologyItem {
      ...withProps({
      technology,
      technologies: [technology, mockTechnology({ groupId: 'test' }), mockTechnology({ groupId: 'test' })],
      groups: [mockGroup(), mockGroup({ id: 'test' }), mockGroup()],
      selected: true,
      })
    } />,
  );

  expect(element.css('transform')).toEqual(`rotateZ(150deg)`);
});

it('offsets items within same group', () => {
  const group = mockGroup({ id: 'test' });
  const technologies = [
    mockTechnology({ id: 'one', groupId: group.id }),
    mockTechnology({ id: 'two', groupId: group.id }),
  ];

  const sample = render(
    <TechnologyItem {
      ...withProps({
        technology: technologies[0],
        technologies,
        groups: [mockGroup(), group],
        selected: true,
      })
    } />,
  );

  const other = render(
    <TechnologyItem {
      ...withProps({
        technology: technologies[1],
        technologies,
        groups: [mockGroup(), group],
        selected: true,
      })
    } />,
  );

  // 2 groups, 1 element in group
  expect(sample.css('width')).not.toEqual(other.css('width'))
});

it('offsets items to the right base position same group', () => {
  const groups = [
    mockGroup({ id: 'group-one' }),
    mockGroup({ id: 'group-two' }),
  ];

  const technologies = [
    mockTechnology({ id: 'one', groupId: 'group-one' }),
    mockTechnology({ id: 'two', groupId: 'group-two' }),
  ];

  const sample = render(
    <TechnologyItem {
      ...withProps({
        technology: technologies[0],
        technologies,
        groups,
      })
    } />,
  );

  const other = render(
    <TechnologyItem {
      ...withProps({
        technology: technologies[1],
        technologies,
        groups,
      })
    } />,
  );

  expect(sample.css('transform')).toContain('rotateZ(90deg)');
  expect(other.css('transform')).toContain('rotateZ(270deg)');
});
