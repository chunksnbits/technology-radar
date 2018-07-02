"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var react_dom_1 = require("react-dom");
var store_1 = require("core/store");
var dom_1 = require("core/utils/dom");
if (dom_1.canUseDOM()) {
    Promise.resolve().then(function () { return require('what-input'); });
}
// ----------------------------------------------------------------------------- Implementation
function bootstrap(AppElement, rootElement, config) {
    var applicationState = config.application, technologyRadar = config.technologyRadar, application = config.application;
    var Root = function () { return (React.createElement(store_1.ApplicationStateProvider, { initialState: applicationState },
        React.createElement(store_1.TechnologyRadarProvider, { initialState: __assign({}, technologyRadar) },
            React.createElement(AppElement, null)))); };
    if (dom_1.canUseDOM()) {
        document.title = application.title;
    }
    if (rootElement.hasChildNodes()) {
        react_dom_1.hydrate(React.createElement(Root, null), rootElement);
    }
    else {
        react_dom_1.render(React.createElement(Root, null), rootElement);
    }
    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line:no-var-requires
        var whyDidYouUpdate = require('why-did-you-update').whyDidYouUpdate;
        whyDidYouUpdate(React);
    }
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=bootstrap.js.map