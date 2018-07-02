"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var index_1 = require("./index");
var mocks_1 = require("mocks");
var enzyme_1 = require("enzyme");
// ----------------------------------------------------------------------------- Implementation
it('initializes application state', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ApplicationStateProvider, null));
    var state = element.state();
    expect(state.selectedTechnology).toBeNull();
    expect(state.selectedGroup).toBeNull();
});
it('applies initialState', function () {
    var technologies = [mocks_1.mockTechnology()];
    var groups = [mocks_1.mockGroup()];
    var selectedTechnology = technologies[0];
    var selectedGroup = groups[0];
    var element = enzyme_1.shallow(React.createElement(index_1.ApplicationStateProvider, { initialState: {
            selectedTechnology: selectedTechnology,
            selectedGroup: selectedGroup,
            breakpoint: 'large',
            theme: null
        } }));
    var state = element.state();
    expect(state.selectedTechnology).toEqual(selectedTechnology);
    expect(state.selectedGroup).toEqual(selectedGroup);
});
it('updates selectedTechnology on selectTechnology', function () {
    var technologies = [mocks_1.mockTechnology()];
    var selected = technologies[0];
    var element = enzyme_1.shallow(React.createElement(index_1.ApplicationStateProvider, null));
    var state = element.state();
    expect(state.selectedTechnology).toBeNull();
    state.selectTechnology(selected);
    var updatedState = element.state();
    expect(updatedState.selectedTechnology.id).toBe(selected.id);
});
it('updates selectedGroup on selectGroup', function () {
    var groups = [mocks_1.mockGroup()];
    var selected = groups[0];
    var element = enzyme_1.shallow(React.createElement(index_1.ApplicationStateProvider, null));
    var state = element.state();
    expect(state.selectedGroup).toBeNull();
    state.selectGroup(selected);
    var updatedState = element.state();
    expect(updatedState.selectedGroup.id).toBe(selected.id);
});
//# sourceMappingURL=spec.js.map