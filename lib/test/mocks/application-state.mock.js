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
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var uuid_1 = require("utils/uuid");
var generic_mock_1 = require("./generic.mock");
exports.mockApplicationState = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        title: 'Any',
        logo: '//any.logo.svg',
        breakpoint: 'large',
        viewMode: 'list'
    }, patch);
};
exports.mockApplicationStateStore = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, __assign({ focusedTechnology: null, focusTechnology: generic_mock_1.noop, selectedTechnology: null, selectTechnology: generic_mock_1.noop, selectGroup: generic_mock_1.noop, reset: generic_mock_1.noop, breakpoint: 'large', updateBreakpoint: generic_mock_1.noop, setOwner: generic_mock_1.noop, setEditMode: generic_mock_1.noop, toggleViewMode: generic_mock_1.noop }, exports.mockApplicationState(patch)), patch);
};
exports.mockTechnologyRadar = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        technologies: [exports.mockTechnology()],
        groups: [exports.mockGroup()],
        edited: false,
        settings: exports.mockSettings(),
    }, patch);
};
exports.mockTechnologyRadarStore = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, __assign({ createNew: generic_mock_1.noop, edit: generic_mock_1.noop, addGroup: generic_mock_1.noop, addTechnology: generic_mock_1.noop, updateGroup: generic_mock_1.noop, updateTechnology: generic_mock_1.noop, removeGroup: generic_mock_1.noop, removeTechnology: generic_mock_1.noop, clearAll: generic_mock_1.noop }, exports.mockTechnologyRadar(patch)), patch);
};
exports.mockTechnology = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        id: uuid_1.uuid(),
        name: 'Any',
        groupId: null,
        level: 2,
        group: 3,
        logo: '//any.logo.svg',
        description: null
    }, patch);
};
exports.mockLevel = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        id: uuid_1.uuid(),
        name: 'Any'
    }, patch);
};
exports.mockGroup = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        id: uuid_1.uuid(),
        group: 0,
        name: 'Any',
        color: 'red',
        description: null
    }, patch);
};
exports.mockSettings = function (patch) {
    if (patch === void 0) { patch = {}; }
    return Object.assign({}, {
        innerRadiusPercent: 10,
        outerRadiusPercent: 50
    }, patch);
};
exports.shallowWithApplicationState = function (element, applicationState) {
    if (applicationState === void 0) { applicationState = {}; }
    return enzyme_1.shallow(react_1.cloneElement(element, __assign({ applicationState: applicationState }, applicationState)));
};
exports.mountWithApplicationState = function (element, applicationState) {
    if (applicationState === void 0) { applicationState = {}; }
    return enzyme_1.mount(react_1.cloneElement(element, __assign({ applicationState: applicationState }, applicationState)));
};
exports.renderWithApplicationState = function (element, applicationState) {
    if (applicationState === void 0) { applicationState = {}; }
    return enzyme_1.render(react_1.cloneElement(element, __assign({ applicationState: applicationState }, applicationState)));
};
//# sourceMappingURL=application-state.mock.js.map