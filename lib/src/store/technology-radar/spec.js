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
import { TechnologyRadarProviderComponent } from '.';
import { mockTechnology, mockGroup, mockApplicationState } from 'mocks';
import { shallow } from 'enzyme';
// ---------------------------------------------------------------------------- Implementation
it('initializes TechnologyRadarStoreProvider state', function () {
    var initialState = {
        groups: [mockGroup()],
        technologies: [mockTechnology()],
    };
    var element = shallow(React.createElement(TechnologyRadarProviderComponent, __assign({ state: initialState }, mockApplicationState())));
    var state = element.props().value;
    expect(Array.isArray(state.technologies)).toBeTruthy();
    expect(Array.isArray(state.groups)).toBeTruthy();
});
it('applies initialState', function () {
    var initialState = {
        groups: [mockGroup()],
        technologies: [mockTechnology()],
    };
    var element = shallow(React.createElement(TechnologyRadarProviderComponent, __assign({ state: initialState }, mockApplicationState())));
    var state = element.props().value;
    expect(state.technologies.length).toBe(1);
    expect(state.technologies[0]).toEqual(initialState.technologies[0]);
    expect(state.groups.length).toBe(1);
    expect(state.groups[0]).toEqual(initialState.groups[0]);
});
//# sourceMappingURL=spec.js.map