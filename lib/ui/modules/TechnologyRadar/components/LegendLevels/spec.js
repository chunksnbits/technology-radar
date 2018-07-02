"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var enzyme_1 = require("enzyme");
var mocks_1 = require("mocks");
var index_1 = require("./index");
// ----------------------------------------------------------------------------- Implementation
it('renders element', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.LegendLevels, { technologies: [mocks_1.mockTechnology(), mocks_1.mockTechnology({ level: 2 })], innerRadiusPercent: 10, outerRadiusPercent: 50, levels: [mocks_1.mockLevel(), mocks_1.mockLevel()] }));
    expect(element.exists()).toBeTruthy();
    expect(element.find('.c-legend-levels').length).toBe(1);
});
it('renders levels', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.LegendLevels, { technologies: [mocks_1.mockTechnology(), mocks_1.mockTechnology({ level: 2 })], innerRadiusPercent: 10, outerRadiusPercent: 50, levels: [mocks_1.mockLevel(), mocks_1.mockLevel()] }));
    expect(element.find('.c-legend-levels__level').length).toBe(2);
});
//# sourceMappingURL=spec.js.map