import 'mocks/mock-jss';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { LegendGroupLabels } from '.';
import { shallow } from 'enzyme';
import { mockGroup, noop, createClasses, extractSelectors } from 'mocks';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
// ----------------------------------------------------------------------------- Implementation
it('renders group labels', function () {
    var element = shallow(React.createElement(LegendGroupLabels, { classes: classes, groups: [mockGroup({ name: 'Test' })], onSelect: noop }));
    expect(element.exists()).toBeTruthy();
    expect(element.find(selectors.root).length).toBe(1);
    expect(element.text()).toContain('Test');
});
it('triggers selectGroup prop on group click', function () {
    var selectGroup = jasmine.createSpy();
    var element = shallow(React.createElement(LegendGroupLabels, { classes: classes, groups: [mockGroup({ name: 'Test' })], onSelect: selectGroup }));
    element.find(selectors.legendGroupLabelsLabel).simulate('click', new Event('click'));
    expect(selectGroup).toHaveBeenCalled();
});
//# sourceMappingURL=spec.js.map