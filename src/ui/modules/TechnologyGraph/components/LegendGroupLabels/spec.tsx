import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { LegendGroupLabels } from './index';
import { shallow } from 'enzyme';
import { mockGroup, noop, createClasses, extractSelectors } from 'mocks';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);
const selectors = extractSelectors(classes);

// ----------------------------------------------------------------------------- Implementation
it('renders group labels', () => {
  const element = shallow(
    <LegendGroupLabels
      classes={ classes }
      groups={ [mockGroup({ name: 'Test' })] }
      onSelect={ noop } />,
  );

  expect(element.exists()).toBeTruthy();
  expect(element.find(selectors.root).length).toBe(1);
  expect(element.text()).toContain('Test');
});

it('triggers selectGroup prop on group click', () => {
  const selectGroup = jasmine.createSpy();

  const element = shallow(
    <LegendGroupLabels
      classes={ classes }
      groups={ [mockGroup({ name: 'Test' })] }
      onSelect={ selectGroup } />,
  );

  element.find(selectors.legendGroupLabelsLabel).simulate('click', new Event('click'));

  expect(selectGroup).toHaveBeenCalled();
});
