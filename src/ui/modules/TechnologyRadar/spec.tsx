
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { mockTechnology, mockGroup, mockSettings, mockApplicationStateStore, mockTechnologyRadarStore, mockLevel } from 'mocks';

import { LegendGroupLabels } from './components/LegendGroupLabels';
import { TechnologyItem } from './components/TechnologyItem';
import { LegendLevels } from './components/LegendLevels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';

import { TechnologyRadarComponent as TechnologyRadar } from './index';

const shallowWithState = (props: any = {}) => {
  return shallow(
    <TechnologyRadar
      applicationState={ mockApplicationStateStore(props.applicationState) }
      technologyRadar={ mockTechnologyRadarStore(props.technologyRadar)  }/>
  )
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('renders legend', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: []
    }
  });

  expect(element.find(LegendGroupLabels).length).toBe(1);
  expect(element.find(LegendLevels).length).toBe(1);
  expect(element.find(LegendGroupSeparators).length).toBe(1);
});

it('renders technology a single technology', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(1);
});

it('renders technology a multiple technologies', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(2);
});

it('applies base rotation', () => {
  const group = mockGroup();

  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
      groups: [group],
      levels: [mockLevel(), mockLevel()],
      settings: mockSettings()
    }
  });

  expect(element.find('.c-technology-radar').render().css('transform')).toContain('rotateZ(-10deg)');
});
