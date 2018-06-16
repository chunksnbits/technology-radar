import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { mockTechnology, mockGroup, mockTechnologyRadarStore, mockApplicationStateStore } from 'mocks';

import { TechnologyDetails } from './index';

// ----------------------------------------------------------------------------- Configuration
const groups = [mockGroup({ id: 'any' })]

const shallowWithState = (props: any = {}) => {
  return shallow(
    <TechnologyDetails
      applicationState={ props.applicationState || {} }
      technologyRadar={ props.technologyRadar || {} }/>
  )
}

const mountWithState = (props: any = {}) => {
  return mount(
    <TechnologyDetails
      applicationState={ props.applicationState || {} }
      technologyRadar={ props.technologyRadar || {} }/>
  )
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithState({
    technologyRadar: {
      groups,
    },
    applicationState: {
      selectedTechnology: null
    }
  });

  expect(element.length).toBe(1);
});


it('renders title', () => {
  const element = shallowWithState({
    applicationState: {
      selectedTechnology: mockTechnology()
    },
    technologyRadar: {
      groups,
    }
  });

  expect(element.find('.c-technology-details__name').text()).toBe('Any');
});

it('renders description', () => {
  const element = shallowWithState({
    technologyRadar: {
      groups,
    },
    applicationState: {
      selectedTechnology: mockTechnology({ description: 'Description', groupId: 'any' })
    }
  });

  expect(element.find('.c-technology-details__description').text()).toBe('Description');
});

it('renders group name', () => {
  const technology = mockTechnology({ id: test, groupId: 'any' });

  const element = mountWithState({
    technologyRadar: mockTechnologyRadarStore({
      technologies: [technology, mockTechnology(), mockTechnology()],
      groups: [mockGroup({ id: 'any', name: 'Group' })],
    }),
    applicationState: mockApplicationStateStore({
      selectedTechnology: technology
    })
  });

  expect(element.find('.c-technology-details__group-name').text()).toBe('Group');
});

it('renders group coloor', () => {
  const element = shallowWithState({
    technologyRadar: {
      groups: [mockGroup({ id: 'any', name: 'Group' })],
    },
    applicationState: {
      selectedTechnology: mockTechnology({ groupId: 'any', color: 'red' })
    }
  });

  const color = element.find('.c-technology-details__group-color');

  expect(color.getElement().props.style.borderColor).toBe('red');
});
