"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocks/replace-consume");
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var index_1 = require("./index");
var mocks_1 = require("mocks");
var Header_1 = require("core/ui/modules/Header");
var TechnologyRadar_1 = require("core/ui/modules/TechnologyRadar");
var Footer_1 = require("core/ui/modules/Footer");
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.App, null), mocks_1.mockApplicationStateStore());
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders technology radar', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.App, null), mocks_1.mockApplicationStateStore());
    expect(element.containsMatchingElement(React.createElement(TechnologyRadar_1.TechnologyRadar, null))).toEqual(true);
});
it('renders header', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.App, null), mocks_1.mockApplicationStateStore());
    expect(element.containsMatchingElement(React.createElement(Header_1.Header, null))).toEqual(true);
});
it('renders footer', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.App, null), mocks_1.mockApplicationStateStore());
    expect(element.containsMatchingElement(React.createElement(Footer_1.Footer, null))).toEqual(true);
});
//# sourceMappingURL=spec.js.map