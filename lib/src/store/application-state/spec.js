// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { ApplicationStateProvider } from '.';
import { mockTechnology, mockGroup } from 'mocks';
import { shallow } from 'enzyme';
// ----------------------------------------------------------------------------- Implementation
it('initializes application state', function () {
    var element = shallow(React.createElement(ApplicationStateProvider, null));
    var state = element.state();
    expect(state.selectedTechnology).toBeNull();
    expect(state.selectedGroup).toBeNull();
});
it('applies initialState', function () {
    var technologies = [mockTechnology()];
    var groups = [mockGroup()];
    var selectedTechnology = technologies[0];
    var selectedGroup = groups[0];
    var element = shallow(React.createElement(ApplicationStateProvider, { state: {
            selectedTechnology: selectedTechnology,
            selectedGroup: selectedGroup,
        } }));
    var state = element.state();
    expect(state.selectedTechnology).toEqual(selectedTechnology);
    expect(state.selectedGroup).toEqual(selectedGroup);
});
it('updates selectedTechnology on selectTechnology', function () {
    var technologies = [mockTechnology()];
    var selected = technologies[0];
    var element = shallow(React.createElement(ApplicationStateProvider, null));
    var state = element.state();
    expect(state.selectedTechnology).toBeNull();
    state.selectTechnology(selected);
    var updatedState = element.state();
    expect(updatedState.selectedTechnology.id).toBe(selected.id);
});
it('updates selectedGroup on selectGroup', function () {
    var groups = [mockGroup()];
    var selected = groups[0];
    var element = shallow(React.createElement(ApplicationStateProvider, null));
    var state = element.state();
    expect(state.selectedGroup).toBeNull();
    state.selectGroup(selected);
    var updatedState = element.state();
    expect(updatedState.selectedGroup.id).toBe(selected.id);
});
//# sourceMappingURL=spec.js.map