"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocks/replace-consume");
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var index_1 = require("./index");
var mocks_1 = require("mocks");
var view_toggle_1 = require("./components/view-toggle");
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.Footer, null), mocks_1.mockApplicationState());
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders toggle view button', function () {
    var element = mocks_1.shallowWithApplicationState(React.createElement(index_1.Footer, null), Object.assign(mocks_1.mockApplicationState(), { viewMode: 'list' }));
    expect(element.find(view_toggle_1.ViewToggle).props().viewMode).toEqual('list');
});
//# sourceMappingURL=spec.js.map