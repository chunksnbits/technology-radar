var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// ----------------------------------------------------------------------------- Dependencies
import { uuid } from 'utils/uuid';
// ----------------------------------------------------------------------------- Implementation
export var mockApplicationState = function (patch) {
    if (patch === void 0) { patch = {}; }
    return (__assign({ title: 'Any', logo: '//any.logo.svg', breakpoint: 'large', viewMode: 'list' }, patch));
};
export var mockTechnologyRadar = function (patch) {
    if (patch === void 0) { patch = {}; }
    return (__assign({ technologies: [mockTechnology()], groups: [mockGroup()] }, patch));
};
export var mockTechnology = function (patch) {
    if (patch === void 0) { patch = {}; }
    return (__assign({ id: uuid(), name: 'Any', groupId: null, level: 2, logo: '//any.logo.svg', description: null }, patch));
};
export var mockLevel = function (patch) {
    if (patch === void 0) { patch = {}; }
    return (__assign({ id: uuid(), name: 'Any' }, patch));
};
export var mockGroup = function (patch) {
    if (patch === void 0) { patch = {}; }
    return (__assign({ id: uuid(), group: 0, name: 'Any', color: 'red', description: null }, patch));
};
export var mockLayout = function (patch) {
    if (patch === void 0) { patch = {}; }
    return (__assign({ technologyRadar: mockSettings(), breakpoints: {
            small: 0,
            medium: 1000,
            large: 2000,
        } }, patch));
};
export var mockSettings = function (patch) {
    if (patch === void 0) { patch = {}; }
    return (__assign({ innerRadiusPercent: 10, outerRadiusPercent: 50 }, patch));
};
//# sourceMappingURL=application-state.mock.js.map