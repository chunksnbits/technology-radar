"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocks/replace-consume");
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var enzyme_1 = require("enzyme");
var mocks_1 = require("mocks");
var LegendGroupLabels_1 = require("./components/LegendGroupLabels");
var TechnologyItem_1 = require("./components/TechnologyItem");
var LegendLevels_1 = require("./components/LegendLevels");
var LegendGroupSeparators_1 = require("./components/LegendGroupSeparators");
var index_1 = require("./index");
var shallowWithState = function (props) {
    if (props === void 0) { props = {}; }
    return enzyme_1.shallow(React.createElement(index_1.TechnologyRadar, __assign({}, mocks_1.mockApplicationStateStore(props.applicationState), mocks_1.mockTechnologyRadarStore(props.technologyRadar))));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mocks_1.mockTechnology()],
            groups: [mocks_1.mockGroup()]
        }
    });
    expect(element.find('.c-technology-radar')).toBeTruthy();
});
it('renders legend', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: []
        }
    });
    expect(element.find(LegendGroupLabels_1.LegendGroupLabels).length).toBe(1);
    expect(element.find(LegendLevels_1.LegendLevels).length).toBe(1);
    expect(element.find(LegendGroupSeparators_1.LegendGroupSeparators).length).toBe(1);
});
it('renders technology a single technology', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mocks_1.mockTechnology()],
            groups: [mocks_1.mockGroup()]
        }
    });
    expect(element.find(TechnologyItem_1.TechnologyItem).length).toBe(1);
});
it('renders technology a multiple technologies', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mocks_1.mockTechnology(), mocks_1.mockTechnology({ id: 'other' })],
            groups: [mocks_1.mockGroup()]
        }
    });
    expect(element.find(TechnologyItem_1.TechnologyItem).length).toBe(2);
});
it('applies base rotation', function () {
    var group = mocks_1.mockGroup();
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mocks_1.mockTechnology({ groupId: group.id }), mocks_1.mockTechnology({ groupId: group.id })],
            groups: [group],
            levels: [mocks_1.mockLevel(), mocks_1.mockLevel()],
            settings: mocks_1.mockSettings()
        }
    });
    var transform = 'scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 0, 1, -10deg)';
    expect(element.find('.c-technology-radar').render().css('transform')).toContain(transform);
});
//# sourceMappingURL=spec.js.map