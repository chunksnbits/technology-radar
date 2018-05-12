
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { TechnologyRadar } from './index';
import { TechnologyItem } from 'components/TechnologyItem';
import { Legend } from 'components/Legend';
import { mockApplicationState, mockTechnology, mockGroup } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <TechnologyRadar applicationState={
      mockApplicationState({
        technologies: [mockTechnology()],
        groups: [mockGroup()]
      })
    } />
  );
  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('renders legend', () => {
  const element = shallow(
    <TechnologyRadar applicationState={
      mockApplicationState({
        technologies: []
      })
    } />
  );

  expect(element.find(Legend).length).toBe(1);
});

it('renders technology a single technology', () => {
  const element = shallow(
    <TechnologyRadar applicationState={
      mockApplicationState({
        technologies: [mockTechnology()],
        groups: [mockGroup()]
      })
    } />
  );

  expect(element.find(TechnologyItem).length).toBe(1);
});

it('renders technology a multiple technologoes', () => {
  const element = shallow(
    <TechnologyRadar applicationState={
      mockApplicationState({
        technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
        groups: [mockGroup()]
      })
    } />
  );

  expect(element.find(TechnologyItem).length).toBe(2);
});