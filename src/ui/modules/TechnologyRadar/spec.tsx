
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { TechnologyRadarComponent as TechnologyRadar } from './index';
import { TechnologyItem } from './components/TechnologyItem';
import { Legend } from './components/Legend';
import { mockTechnology, mockGroup, mockSettings } from 'mocks';
import { shallow } from 'enzyme';

const renderWithState = (props: any = {}) => {
  return shallow(
    <TechnologyRadar
      applicationState={ props.applicationState || {} }
      technologyRadar={ props.technologyRadar || {} }/>
  )
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = renderWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('renders legend', () => {
  const element = renderWithState({
    technologyRadar: {
      technologies: []
    }
  });

  expect(element.find(Legend).length).toBe(1);
});

it('renders technology a single technology', () => {
  const element = renderWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(1);
});

it('renders technology a multiple technologies', () => {
  const element = renderWithState({
    technologyRadar: {
      technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(2);
});

it('applies base rotation', () => {
  const group = mockGroup();

  const element = renderWithState({
    technologyRadar: {
      technologies: [mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
      groups: [group],
      settings: mockSettings()
    }
  });

  expect(element.find('.c-technology-radar').render().css('transform')).toContain('rotateZ(-10deg)');
});
