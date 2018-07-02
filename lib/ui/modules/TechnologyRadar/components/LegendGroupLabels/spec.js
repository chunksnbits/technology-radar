"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var index_1 = require("./index");
var enzyme_1 = require("enzyme");
var mocks_1 = require("mocks");
// ----------------------------------------------------------------------------- Implementation
it('renders group labels', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.LegendGroupLabels, { groups: [mocks_1.mockGroup({ name: 'Test' })], onSelect: mocks_1.noop }));
    expect(element.exists()).toBeTruthy();
    expect(element.find('.c-legend-group-labels').length).toBe(1);
    expect(element.text()).toContain('Test');
});
it('triggers selectGroup prop on group click', function () {
    var selectGroup = jasmine.createSpy();
    var element = enzyme_1.shallow(React.createElement(index_1.LegendGroupLabels, { groups: [mocks_1.mockGroup({ name: 'Test' })], onSelect: selectGroup }));
    element.find('.c-legend-group-labels__label').simulate('click', new Event('click'));
    expect(selectGroup).toHaveBeenCalled();
});
//# sourceMappingURL=spec.js.map