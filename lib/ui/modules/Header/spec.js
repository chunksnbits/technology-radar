"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocks/replace-consume");
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var index_1 = require("./index");
var mocks_1 = require("mocks");
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.Header, null), mocks_1.mockApplicationState());
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders title if available', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.Header, null), Object.assign(mocks_1.mockApplicationState(), { title: 'Test' }));
    expect(element.find('.c-header__title').length).toEqual(1);
    expect(element.find('.c-header__title').text()).toEqual('Test');
});
it('does not render title if not availble', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.Header, null), Object.assign(mocks_1.mockApplicationState(), { title: null }));
    expect(element.find('.c-header__title').length).toEqual(0);
});
it('renders logo if availble', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.Header, null), mocks_1.mockApplicationState());
    expect(element.find('.c-header__logo').length).toEqual(1);
});
it('does not render logo if not availble', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.Header, null), Object.assign(mocks_1.mockApplicationState(), { logo: null }));
    expect(element.find('.c-header__logo').length).toEqual(0);
});
//# sourceMappingURL=spec.js.map