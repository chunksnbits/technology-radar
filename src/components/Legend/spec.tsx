
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { Legend } from './index';

import { mockTechnology, mockGroup, mockSettings } from 'mocks';

// ----------------------------------------------------------------------------- Configuration
const handleSelect = jest.fn(() => { /** noop */ });

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <Legend
      technologies={ [] }
      groups={[]}
      settings={ mockSettings() }
      onSelectGroup={ handleSelect } />
  );
  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('renders legend', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology()] }
      groups={ [mockGroup()] }
      settings={ mockSettings() }
      onSelectGroup={ handleSelect } />
  );

  expect(element.find('.c-legend').length).toBe(1);
});

it('renders levels', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology(), mockTechnology({ level: 2 })] }
      groups={ [mockGroup()] }
      settings={ mockSettings() }
      onSelectGroup={ handleSelect } />
  );

  expect(element.find('.c-legend__level').length).toBe(2);
});

it('renders groups', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology()] }
      groups={ [mockGroup(), mockGroup({ id: 2 })] }
      settings={ mockSettings() }
      onSelectGroup={ handleSelect } />
  );

  expect(element.find('.c-legend__group').length).toBe(2);
});

it('renders group label', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology()] }
      groups={ [mockGroup({ name: 'Test' })] }
      settings={ mockSettings() }
      onSelectGroup={ handleSelect } />
  );

  expect(element.text()).toContain('Test');
});

it('triggers selectGroup prop on group click', () => {
  const element = shallow(
    <Legend
      technologies={ [mockTechnology()] }
      groups={ [mockGroup({ name: 'Test' })] }
      settings={ mockSettings() }
      onSelectGroup={ handleSelect } />
  );

  element.find('.c-legend__label').simulate('click');

  expect(handleSelect).toHaveBeenCalled();
});