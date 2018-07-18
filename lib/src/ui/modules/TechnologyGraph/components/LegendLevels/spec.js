import 'mocks/mock-jss';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockTechnology, mockLevel, createClasses, extractSelectors } from 'mocks';
import { LegendLevels } from '.';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
// ----------------------------------------------------------------------------- Implementation
it('renders element', function () {
    var element = shallow(React.createElement(LegendLevels, { classes: classes, technologies: [mockTechnology(), mockTechnology({ level: 2 })], settings: {
            innerRadiusPercent: 10,
            outerRadiusPercent: 50,
        }, levels: [mockLevel(), mockLevel()] }));
    expect(element.exists()).toBeTruthy();
    expect(element.find(selectors.root).length).toBe(1);
});
it('renders levels', function () {
    var element = shallow(React.createElement(LegendLevels, { classes: classes, technologies: [mockTechnology(), mockTechnology({ level: 2 })], settings: {
            innerRadiusPercent: 10,
            outerRadiusPercent: 50,
        }, levels: [mockLevel(), mockLevel()] }));
    expect(element.find(selectors.legendLevelsLevel).length).toBe(2);
});
//# sourceMappingURL=spec.js.map