
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockTechnology, mockGroup } from 'mocks';
import { ApplicationStateContext } from 'store';

import { TechnologyDetails } from './index';

// ----------------------------------------------------------------------------- Configuration
const groups = [mockGroup({ id: 'any' })]

const renderWithData = (value: any) => {
  return shallow(
    <ApplicationStateContext.Provider value={ value }>
      <TechnologyDetails />
    </ApplicationStateContext.Provider>
  )
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = renderWithData({
    technologyRadar: {
      groups,
    },
    selectedTechnology: null
  });

  expect(element.length).toBe(1);
});


it('renders title', () => {
  const element = renderWithData({
    technologyRadar: {
      groups,
    },
    selectedTechnology: mockTechnology()
  });

  expect(element.find('.c-technology-details__name').text()).toBe('Any');
});

it('renders description', () => {
  const element = renderWithData({
    technologyRadar: {
      groups,
    },
    selectedTechnology: mockTechnology({ description: 'Description', groupId: 'any' })
  });

  expect(element.find('.c-technology-details__description').text()).toBe('Description');
});

it('renders group name', () => {
  const element = renderWithData({
    technologyRadar: {
      groups: [mockGroup({ id: 'any', name: 'Group' })],
    },
    selectedTechnology: mockTechnology({ groupId: 'any' })
  });

  expect(element.find('.c-technology-details__group').text()).toBe('Group');
});

it('renders group coloor', () => {
  const element = renderWithData({
    technologyRadar: {
      groups: [mockGroup({ id: 'any', name: 'Group' })],
    },
    selectedTechnology: mockTechnology({ groupId: 'any', color: 'red' })
  });

  const color = element.find('.c-technology-details__group-color');

  expect(color.getElement().props.style.borderColor).toBe('red');
});
