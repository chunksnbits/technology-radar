import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { mockGroup, createClasses, extractSelectors } from 'mocks';

import { LegendGroupSeparators } from './index';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);
const selectors = extractSelectors(classes);

// ----------------------------------------------------------------------------- Implementation
it('renders group separators', () => {
  const element = shallow(
    <LegendGroupSeparators classes={ classes } groups={ [mockGroup(), mockGroup({ id: '2 '})] } />,
  );

  expect(element.find(selectors.legendGroupSeparatorsSeparator).length).toBe(2);
});
