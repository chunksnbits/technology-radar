// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockTechnology, mockLevel } from 'mocks';
import { LegendLevels } from './index';
// ----------------------------------------------------------------------------- Implementation
it('renders element', function () {
    var element = shallow(React.createElement(LegendLevels, { technologies: [mockTechnology(), mockTechnology({ level: 2 })], innerRadiusPercent: 10, outerRadiusPercent: 50, levels: [mockLevel(), mockLevel()] }));
    expect(element.exists()).toBeTruthy();
    expect(element.find('.c-legend-levels').length).toBe(1);
});
it('renders levels', function () {
    var element = shallow(React.createElement(LegendLevels, { technologies: [mockTechnology(), mockTechnology({ level: 2 })], innerRadiusPercent: 10, outerRadiusPercent: 50, levels: [mockLevel(), mockLevel()] }));
    expect(element.find('.c-legend-levels__level').length).toBe(2);
});
//# sourceMappingURL=spec.js.map