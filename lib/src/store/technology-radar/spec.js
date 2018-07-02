"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocks/replace-consume");
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var index_1 = require("./index");
var application_state_1 = require("../application-state");
var mocks_1 = require("mocks");
var enzyme_1 = require("enzyme");
// ----------------------------------------------------------------------------- Configuration
function mountStore(initialState, applicationState) {
    if (initialState === void 0) { initialState = {}; }
    if (applicationState === void 0) { applicationState = null; }
    if (applicationState === null) {
        applicationState = enzyme_1.shallow(React.createElement(application_state_1.ApplicationStateProvider, null)).state();
    }
    return enzyme_1.shallow(React.createElement(index_1.TechnologyRadarProvider, { initialState: initialState, applicationState: applicationState }));
}
// ----------------------------------------------------------------------------- Implementation
it('initializes TechnologyRadarStoreProvider state', function () {
    var element = mountStore({
        groups: [mocks_1.mockGroup()],
        technologies: [mocks_1.mockTechnology()]
    });
    var state = element.state();
    expect(Array.isArray(state.technologies)).toBeTruthy();
    expect(Array.isArray(state.groups)).toBeTruthy();
});
it('applies initialState', function () {
    var technologies = [mocks_1.mockTechnology()];
    ;
    var groups = [mocks_1.mockGroup()];
    var element = mountStore({
        technologies: technologies,
        groups: groups
    });
    var state = element.state();
    expect(state.technologies.length).toBe(1);
    expect(state.technologies[0]).toEqual(technologies[0]);
    expect(state.groups.length).toBe(1);
    expect(state.groups[0]).toEqual(groups[0]);
});
//# sourceMappingURL=spec.js.map