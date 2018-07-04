// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { LegendGroupLabels } from './index';
import { shallow } from 'enzyme';
import { mockGroup, noop } from 'mocks';
// ----------------------------------------------------------------------------- Implementation
it('renders group labels', function () {
    var element = shallow(React.createElement(LegendGroupLabels, { groups: [mockGroup({ name: 'Test' })], onSelect: noop }));
    expect(element.exists()).toBeTruthy();
    expect(element.find('.c-legend-group-labels').length).toBe(1);
    expect(element.text()).toContain('Test');
});
it('triggers selectGroup prop on group click', function () {
    var selectGroup = jasmine.createSpy();
    var element = shallow(React.createElement(LegendGroupLabels, { groups: [mockGroup({ name: 'Test' })], onSelect: selectGroup }));
    element.find('.c-legend-group-labels__label').simulate('click', new Event('click'));
    expect(selectGroup).toHaveBeenCalled();
});
//# sourceMappingURL=spec.js.map