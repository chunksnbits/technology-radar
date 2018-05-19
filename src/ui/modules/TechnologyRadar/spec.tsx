
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { TechnologyRadar } from './index';
import { TechnologyItem } from './components/TechnologyItem';
import { Legend } from './components/Legend';
import { mockTechnology, mockGroup, shallowWithApplicationState } from 'mocks';


// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithApplicationState(<TechnologyRadar />, {
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('renders legend', () => {
  const element = shallowWithApplicationState(<TechnologyRadar />, {
    technologyRadar: {
      technologies: []
    }
  });

  expect(element.find(Legend).length).toBe(1);
});

it('renders technology a single technology', () => {
  const element = shallowWithApplicationState(<TechnologyRadar />, {
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(1);
});

it('renders technology a multiple technologoes', () => {
  const element = shallowWithApplicationState(<TechnologyRadar />, {
    technologyRadar: {
      technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(2);
});