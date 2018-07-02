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
var index_1 = require("./index");
// ----------------------------------------------------------------------------- Configuration
var groups = [mocks_1.mockGroup({ id: 'any' })];
var shallowWithState = function (props) {
    if (props === void 0) { props = {}; }
    return enzyme_1.shallow(React.createElement(index_1.TechnologyDetails, __assign({}, props.applicationState || {}, props.technologyRadar || {})));
};
var mountWithState = function (props) {
    if (props === void 0) { props = {}; }
    return enzyme_1.mount(React.createElement(index_1.TechnologyDetails, __assign({}, props.applicationState || {}, props.technologyRadar || {})));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallowWithState({
        technologyRadar: {
            groups: groups,
        },
        applicationState: {
            selectedTechnology: null
        }
    });
    expect(element.length).toBe(1);
});
it('renders title', function () {
    var element = shallowWithState({
        applicationState: {
            selectedTechnology: mocks_1.mockTechnology()
        },
        technologyRadar: {
            groups: groups,
        }
    });
    expect(element.find('.c-technology-details__name').text()).toBe('Any');
});
it('renders description', function () {
    var element = shallowWithState({
        technologyRadar: {
            groups: groups,
        },
        applicationState: {
            selectedTechnology: mocks_1.mockTechnology({ description: 'Description', groupId: 'any' })
        }
    });
    expect(element.find('.c-technology-details__description').text()).toBe('Description');
});
it('renders group name', function () {
    var technology = mocks_1.mockTechnology({ id: test, groupId: 'any' });
    var element = mountWithState({
        technologyRadar: mocks_1.mockTechnologyRadarStore({
            technologies: [technology, mocks_1.mockTechnology(), mocks_1.mockTechnology()],
            groups: [mocks_1.mockGroup({ id: 'any', name: 'Group' })],
        }),
        applicationState: mocks_1.mockApplicationStateStore({
            selectedTechnology: technology
        })
    });
    expect(element.find('.c-technology-details__group-name').text()).toBe('Group');
});
it('renders group coloor', function () {
    var element = shallowWithState({
        technologyRadar: {
            groups: [mocks_1.mockGroup({ id: 'any', name: 'Group' })],
        },
        applicationState: {
            selectedTechnology: mocks_1.mockTechnology({ groupId: 'any', color: 'red' })
        }
    });
    var color = element.find('.c-technology-details__group-color');
    expect(color.getElement().props.style.borderColor).toBe('red');
});
//# sourceMappingURL=spec.js.map