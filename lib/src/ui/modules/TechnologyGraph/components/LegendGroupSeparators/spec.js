import 'mocks/mock-jss';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockGroup, createClasses, extractSelectors } from 'mocks';
import { LegendGroupSeparators } from '.';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
// ----------------------------------------------------------------------------- Implementation
it('renders group separators', function () {
    var element = shallow(React.createElement(LegendGroupSeparators, { classes: classes, groups: [mockGroup(), mockGroup({ id: '2 ' })] }));
    expect(element.find(selectors.legendGroupSeparatorsSeparator).length).toBe(2);
});
//# sourceMappingURL=spec.js.map