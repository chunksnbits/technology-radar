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
import { bootstrapWebComponent, registerServiceWorker } from 'utils';
import { Webcomponent } from 'ui/views';
// ----------------------------------------------------------------------------- Configuration
var defaults = {
    layout: require('public/layout.json'),
    theme: require('public/theme.json'),
    applicationConfig: null,
    data: null,
};
// ----------------------------------------------------------------------------- Implementation
bootstrapWebComponent(React.createElement(Webcomponent, __assign({}, defaults)), 'technology-radar');
registerServiceWorker();
//# sourceMappingURL=webcomponent.js.map