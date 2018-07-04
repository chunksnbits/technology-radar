import 'mocks/replace-consume';
import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockTechnology, mockGroup, extractSelectors } from 'mocks';

import { TechnologyDetails, TechnologyDetailsProps } from './index';
import { createClasses } from 'mocks';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);
const selectors = extractSelectors(classes);

const withProps = (props: Partial<TechnologyDetailsProps> = {}): TechnologyDetailsProps => {
  return {
    classes,
    groups: [mockGroup({ id: 'any' })],
    technologies: [mockTechnology()],
    selectedTechnology: null,
    ...props,
  };
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(<TechnologyDetails { ...withProps() } />);

  expect(element.length).toBe(1);
});


it('renders title', () => {
  const element = shallow(
    <TechnologyDetails { ...withProps({ selectedTechnology: mockTechnology({ name: 'Test', groupId: 'any' }) }) } />,
  );
  expect(element.find(selectors.technologyDetailsName).text()).toBe('Test');
});

it('renders description', () => {
  const selectedTechnology = mockTechnology({ description: 'Description', groupId: 'any' });
  const element = shallow(
    <TechnologyDetails {
      ...withProps({
        selectedTechnology,
        technologies: [selectedTechnology],
      })
    } />,
  );
  expect(element.find(selectors.technologyDetailsDescription).text()).toBe('Description');
});

it('renders group name', () => {
  const selectedTechnology = mockTechnology({ id: 'test', groupId: 'any' });

  const element = shallow(
    <TechnologyDetails {
      ...withProps({
        selectedTechnology,
        technologies: [selectedTechnology, mockTechnology(), mockTechnology()],
        groups: [mockGroup({ id: 'any', name: 'Group' })],
      })
    } />,
  );

  expect(element.find(selectors.technologyDetailsGroupName).text()).toBe('Group');
});

it('renders group coloor', () => {
  const element = shallow(
    <TechnologyDetails {
      ...withProps({
        groups: [mockGroup({ id: 'any', name: 'Group', color: 'red' })],
        selectedTechnology: mockTechnology({ groupId: 'any' }),
      })
    } />,
  );

  const color = element.find(selectors.technologyDetailsGroupColor);

  expect(color.getElement().props.style.borderColor).toBe('red');
});
