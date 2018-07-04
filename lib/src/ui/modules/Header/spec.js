import 'mocks/replace-consume';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Header } from './index';
import { mockApplicationState, shallowWithApplicationState } from 'mocks';
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallowWithApplicationState(React.createElement(Header, null), mockApplicationState());
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders title if available', function () {
    var element = shallowWithApplicationState(React.createElement(Header, null), Object.assign(mockApplicationState(), { title: 'Test' }));
    expect(element.find('.c-header__title').length).toEqual(1);
    expect(element.find('.c-header__title').text()).toEqual('Test');
});
it('does not render title if not availble', function () {
    var element = shallowWithApplicationState(React.createElement(Header, null), Object.assign(mockApplicationState(), { title: null }));
    expect(element.find('.c-header__title').length).toEqual(0);
});
it('renders logo if availble', function () {
    var element = shallowWithApplicationState(React.createElement(Header, null), mockApplicationState());
    expect(element.find('.c-header__logo').length).toEqual(1);
});
it('does not render logo if not availble', function () {
    var element = shallowWithApplicationState(React.createElement(Header, null), Object.assign(mockApplicationState(), { logo: null }));
    expect(element.find('.c-header__logo').length).toEqual(0);
});
//# sourceMappingURL=spec.js.map