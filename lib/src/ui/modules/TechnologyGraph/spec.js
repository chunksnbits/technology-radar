var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import 'mocks/replace-consume';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockTechnology, mockGroup, mockSettings, mockApplicationStateStore, mockTechnologyRadarStore, mockLevel, } from 'mocks';
import { LegendGroupLabels } from './components/LegendGroupLabels';
import { TechnologyItem } from './components/TechnologyItem';
import { LegendLevels } from './components/LegendLevels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';
import { TechnologyGraph } from './index';
var shallowWithState = function (props) {
    if (props === void 0) { props = {}; }
    return shallow(React.createElement(TechnologyGraph, __assign({}, mockApplicationStateStore(props.applicationState), mockTechnologyRadarStore(props.technologyRadar))));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mockTechnology()],
            groups: [mockGroup()],
        },
    });
    expect(element.find('.c-technology-graph')).toBeTruthy();
});
it('renders legend', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: [],
        },
    });
    expect(element.find(LegendGroupLabels).length).toBe(1);
    expect(element.find(LegendLevels).length).toBe(1);
    expect(element.find(LegendGroupSeparators).length).toBe(1);
});
it('renders technology a single technology', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mockTechnology()],
            groups: [mockGroup()],
        },
    });
    expect(element.find(TechnologyItem).length).toBe(1);
});
it('renders technology a multiple technologies', function () {
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
            groups: [mockGroup()],
        },
    });
    expect(element.find(TechnologyItem).length).toBe(2);
});
it('applies base rotation', function () {
    var group = mockGroup();
    var element = shallowWithState({
        technologyRadar: {
            technologies: [mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
            groups: [group],
            levels: [mockLevel(), mockLevel()],
            settings: mockSettings(),
        },
    });
    var transform = 'scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 0, 1, -10deg)';
    expect(element.find('.c-technology-graph').render().css('transform')).toContain(transform);
});
//# sourceMappingURL=spec.js.map