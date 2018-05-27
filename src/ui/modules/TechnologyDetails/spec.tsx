
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockTechnology, mockGroup } from 'mocks';

import { TechnologyDetailsComponent as TechnologyDetails } from './index';

// ----------------------------------------------------------------------------- Configuration
const groups = [mockGroup({ id: 'any' })]

const renderWithState = (props: any = {}) => {
  return shallow(
    <TechnologyDetails
      applicationState={ props.applicationState || {} }
      technologyRadar={ props.technologyRadar || {} }/>
  )
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = renderWithState({
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
  const element = renderWithState({
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
  const element = renderWithState({
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
  const element = renderWithState({
    technologyRadar: {
      groups: [mockGroup({ id: 'any', name: 'Group' })],
    },
    applicationState: {
      selectedTechnology: mockTechnology({ groupId: 'any' })
    }
  });

  expect(element.find('.c-technology-details__group').text()).toBe('Group');
});

it('renders group coloor', () => {
  const element = renderWithState({
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
