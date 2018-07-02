var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { render, hydrate } from 'react-dom';
import { ApplicationStateProvider, TechnologyRadarProvider } from 'core/store';
import { canUseDOM } from 'core/utils/dom';
if (canUseDOM()) {
    import('what-input');
}
// ----------------------------------------------------------------------------- Implementation
export function bootstrap(AppElement, rootElement, config) {
    var applicationState = config.application, technologyRadar = config.technologyRadar, application = config.application;
    var Root = function () { return (React.createElement(ApplicationStateProvider, { initialState: applicationState },
        React.createElement(TechnologyRadarProvider, { initialState: __assign({}, technologyRadar, { edited: false }) },
            React.createElement(AppElement, null)))); };
    if (canUseDOM()) {
        document.title = application.title;
    }
    if (rootElement.hasChildNodes()) {
        hydrate(React.createElement(Root, null), rootElement);
    }
    else {
        render(React.createElement(Root, null), rootElement);
    }
    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line:no-var-requires
        var whyDidYouUpdate = require('why-did-you-update').whyDidYouUpdate;
        whyDidYouUpdate(React);
    }
}
//# sourceMappingURL=bootstrap.js.map