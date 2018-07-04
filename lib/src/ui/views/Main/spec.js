import 'mocks/replace-consume';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MainView } from './index';
import { mockApplicationStateStore, shallowWithApplicationState } from 'mocks';
import { Header } from 'core/ui/modules/Header';
import { TechnologyGraph } from 'core/ui/modules/TechnologyGraph';
import { Footer } from 'core/ui/modules/Footer';
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallowWithApplicationState(React.createElement(MainView, null), mockApplicationStateStore());
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders technology radar', function () {
    var element = shallowWithApplicationState(React.createElement(MainView, null), mockApplicationStateStore());
    expect(element.containsMatchingElement(React.createElement(TechnologyGraph, null))).toEqual(true);
});
it('renders header', function () {
    var element = shallowWithApplicationState(React.createElement(MainView, null), mockApplicationStateStore());
    expect(element.containsMatchingElement(React.createElement(Header, null))).toEqual(true);
});
it('renders footer', function () {
    var element = shallowWithApplicationState(React.createElement(MainView, null), mockApplicationStateStore());
    expect(element.containsMatchingElement(React.createElement(Footer, null))).toEqual(true);
});
//# sourceMappingURL=spec.js.map