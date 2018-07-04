import 'mocks/replace-consume';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { TechnologyRadarProvider } from './index';
import { ApplicationStateProvider } from '../application-state';
import { mockTechnology, mockGroup } from 'mocks';
import { shallow } from 'enzyme';
// ----------------------------------------------------------------------------- Configuration
function mountStore(initialState, applicationState) {
    if (initialState === void 0) { initialState = {}; }
    if (applicationState === void 0) { applicationState = null; }
    if (applicationState === null) {
        applicationState = shallow(React.createElement(ApplicationStateProvider, null)).state();
    }
    return shallow(React.createElement(TechnologyRadarProvider, { state: initialState }));
}
// ----------------------------------------------------------------------------- Implementation
it('initializes TechnologyRadarStoreProvider state', function () {
    var element = mountStore({
        groups: [mockGroup()],
        technologies: [mockTechnology()],
    });
    var state = element.state();
    expect(Array.isArray(state.technologies)).toBeTruthy();
    expect(Array.isArray(state.groups)).toBeTruthy();
});
it('applies initialState', function () {
    var technologies = [mockTechnology()];
    ;
    var groups = [mockGroup()];
    var element = mountStore({
        technologies: technologies,
        groups: groups,
    });
    var state = element.state();
    expect(state.technologies.length).toBe(1);
    expect(state.technologies[0]).toEqual(technologies[0]);
    expect(state.groups.length).toBe(1);
    expect(state.groups[0]).toEqual(groups[0]);
});
//# sourceMappingURL=spec.js.map