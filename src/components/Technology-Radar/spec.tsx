import * as React from 'react';
import { shallow } from 'enzyme';
import { TechnologyRadar } from './index';
import { TechnologyItem } from 'components/Technology-Item';
import { Legend } from 'components/Legend';

jest.mock('public/data.json', () => ({
  default: {
    groups: [],
    technologies: [],
  }
}));

const mockTechnology: any = {
  level: 0,
  id: 'any',
  group: 0,
  name: 'Test',
};

const mockGroup: any = {
  name: 'Group'
};

it('renders without crashing', () => {
  const element = shallow(
    <TechnologyRadar technologies={ [] } groups={[]} />
  );
  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('renders legend', () => {
  const element = shallow(
    <TechnologyRadar technologies={ [mockTechnology] } groups={ [mockGroup] } />
  );

  expect(element.find(Legend).length).toBe(1);
});

it('renders technology a single technology', () => {
  const element = shallow(
    <TechnologyRadar technologies={ [mockTechnology] } groups={ [mockGroup] } />
  );

  expect(element.find(TechnologyItem).length).toBe(1);
});

it('renders technology a multiple technologoes', () => {
  const element = shallow(
    <TechnologyRadar
      technologies={ [mockTechnology, Object.assign({}, mockTechnology, { id: 'other' })] }
      groups={ [mockGroup] } />
  );

  expect(element.find(TechnologyItem).length).toBe(2);
});