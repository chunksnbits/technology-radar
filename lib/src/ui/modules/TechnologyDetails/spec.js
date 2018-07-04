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
import { shallow, mount } from 'enzyme';
import { mockTechnology, mockGroup, mockTechnologyRadarStore, mockApplicationStateStore } from 'mocks';
import { TechnologyDetails } from './index';
// ----------------------------------------------------------------------------- Configuration
var groups = [mockGroup({ id: 'any' })];
var shallowWithState = function (props) {
    if (props === void 0) { props = {}; }
    return shallow(React.createElement(TechnologyDetails, __assign({}, props.applicationState || {}, props.technologyRadar || {})));
};
var mountWithState = function (props) {
    if (props === void 0) { props = {}; }
    return mount(React.createElement(TechnologyDetails, __assign({}, props.applicationState || {}, props.technologyRadar || {})));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallowWithState({
        technologyRadar: {
            groups: groups,
        },
        applicationState: {
            selectedTechnology: null,
        },
    });
    expect(element.length).toBe(1);
});
it('renders title', function () {
    var element = shallowWithState({
        applicationState: {
            selectedTechnology: mockTechnology(),
        },
        technologyRadar: {
            groups: groups,
        },
    });
    expect(element.find('.c-technology-details__name').text()).toBe('Any');
});
it('renders description', function () {
    var element = shallowWithState({
        technologyRadar: {
            groups: groups,
        },
        applicationState: {
            selectedTechnology: mockTechnology({ description: 'Description', groupId: 'any' }),
        },
    });
    expect(element.find('.c-technology-details__description').text()).toBe('Description');
});
it('renders group name', function () {
    var technology = mockTechnology({ id: test, groupId: 'any' });
    var element = mountWithState({
        technologyRadar: mockTechnologyRadarStore({
            technologies: [technology, mockTechnology(), mockTechnology()],
            groups: [mockGroup({ id: 'any', name: 'Group' })],
        }),
        applicationState: mockApplicationStateStore({
            selectedTechnology: technology,
        }),
    });
    expect(element.find('.c-technology-details__group-name').text()).toBe('Group');
});
it('renders group coloor', function () {
    var element = shallowWithState({
        technologyRadar: {
            groups: [mockGroup({ id: 'any', name: 'Group' })],
        },
        applicationState: {
            selectedTechnology: mockTechnology({ groupId: 'any', color: 'red' }),
        },
    });
    var color = element.find('.c-technology-details__group-color');
    expect(color.getElement().props.style.borderColor).toBe('red');
});
//# sourceMappingURL=spec.js.map