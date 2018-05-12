
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { TechnologyDetails } from './index';
import { mockTechnology } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <TechnologyDetails selectedTechnology={ null } />
  );

  expect(element.length).toBe(1);
});


it('renders title', () => {
  const element = shallow(
    <TechnologyDetails selectedTechnology={ mockTechnology() } />
  );

  expect(element.find('.c-technology-details__name').text()).toBe('Any');
});

it('renders without crashing', () => {
  const element = shallow(
    <TechnologyDetails selectedTechnology={ mockTechnology({ description: 'Description' }) } />
  );

  expect(element.find('.c-technology-details__description').text()).toBe('Description');
});
