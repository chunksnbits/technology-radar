import 'mocks/replace-consume';
import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, render } from 'enzyme';

import {
  mockTechnology,
  mockGroup,
  mockSettings,
  mockLevel,
} from 'mocks';

import { LegendGroupLabels } from './components/LegendGroupLabels';
import { TechnologyItem } from './components/TechnologyItem';
import { LegendLevels } from './components/LegendLevels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';

import { TechnologyGraph, TechnologyGraphProps } from './index';
import { createClasses, extractSelectors } from 'mocks/styled.mock';
import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);
const selectors = extractSelectors(classes);

function withProps(props: TechnologyGraphProps): TechnologyGraphProps {
  return {
    technologies: [mockTechnology()],
    groups: [mockGroup()],
    settings: mockSettings(),

    ...classes,
    ...props,
  }
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <TechnologyGraph {
      ...withProps({
        technologies: [mockTechnology()],
        groups: [mockGroup()],
      })
    } />,
  );

  expect(element.find(selectors.root)).toBeTruthy();
});

it('renders legend', () => {
  const element = shallow(
    <TechnologyGraph {
      ...withProps({
        technologies: [],
      })
    } />,
  );

  expect(element.find(LegendGroupLabels).length).toBe(1);
  expect(element.find(LegendLevels).length).toBe(1);
  expect(element.find(LegendGroupSeparators).length).toBe(1);
});

it('renders technology a single technology', () => {
  const element = shallow(
    <TechnologyGraph {
      ...withProps({
        technologies: [mockTechnology()],
        groups: [mockGroup()],
      })
    } />,
  );

  expect(element.find(TechnologyItem).length).toBe(1);
});

it('renders technology a multiple technologies', () => {
  const element = shallow(
    <TechnologyGraph {
      ...withProps({
        technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
        groups: [mockGroup()],
      })
    } />,
  );

  expect(element.find(TechnologyItem).length).toBe(2);
});

it('applies base rotation', () => {
  const group = mockGroup();

  const element = render(
    <TechnologyGraph { ...withProps({
      technologies: [mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
      groups: [group],
      levels: [mockLevel(), mockLevel()],
      settings: mockSettings(),
      })
    } />,
  );

  const transform = 'scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 0, 1, -10deg)';

  expect(element.css('transform')).toContain(transform);
});
