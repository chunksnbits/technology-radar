var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { cloneElement } from 'react';
import { mount, shallow, render } from 'enzyme';
import { uuid } from 'utils/uuid';
import { noop } from './generic.mock';
export var mockApplicationState = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        title: 'Any',
        logo: '//any.logo.svg',
        breakpoint: 'large',
        viewMode: 'list',
    }, patch);
};
export var mockApplicationStateStore = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, __assign({ focusedTechnology: null, focusTechnology: noop, selectedTechnology: null, selectTechnology: noop, selectGroup: noop, reset: noop, breakpoint: 'large', updateBreakpoint: noop, setOwner: noop, setEditMode: noop, toggleViewMode: noop }, mockApplicationState(patch)), patch);
};
export var mockTechnologyRadar = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        technologies: [mockTechnology()],
        groups: [mockGroup()],
        edited: false,
        settings: mockSettings(),
    }, patch);
};
export var mockTechnologyRadarStore = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, __assign({ createNew: noop, edit: noop, addGroup: noop, addTechnology: noop, updateGroup: noop, updateTechnology: noop, removeGroup: noop, removeTechnology: noop, clearAll: noop }, mockTechnologyRadar(patch)), patch);
};
export var mockTechnology = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        id: uuid(),
        name: 'Any',
        groupId: null,
        level: 2,
        group: 3,
        logo: '//any.logo.svg',
        description: null,
    }, patch);
};
export var mockLevel = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        id: uuid(),
        name: 'Any',
    }, patch);
};
export var mockGroup = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        id: uuid(),
        group: 0,
        name: 'Any',
        color: 'red',
        description: null,
    }, patch);
};
export var mockSettings = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        innerRadiusPercent: 10,
        outerRadiusPercent: 50,
    }, patch);
};
export var shallowWithApplicationState = function (element, applicationState) {
    if (applicationState === void 0) { applicationState = {}; }
    return shallow(cloneElement(element, __assign({ applicationState: applicationState }, applicationState)));
};
export var mountWithApplicationState = function (element, applicationState) {
    if (applicationState === void 0) { applicationState = {}; }
    return mount(cloneElement(element, __assign({ applicationState: applicationState }, applicationState)));
};
export var renderWithApplicationState = function (element, applicationState) {
    if (applicationState === void 0) { applicationState = {}; }
    return render(cloneElement(element, __assign({ applicationState: applicationState }, applicationState)));
};
//# sourceMappingURL=application-state.mock.js.map