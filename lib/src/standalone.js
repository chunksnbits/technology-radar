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
import { bootstrap, registerServiceWorker, canUseDOM } from 'utils';
import { TechnologyRadar } from 'ui/views';
// ----------------------------------------------------------------------------- Configuration
import applicationConfig from 'public/application-config.json';
var defaults = {
    data: require('public/data.json'),
    applicationConfig: applicationConfig,
    layout: require('public/layout.json'),
    theme: require('public/theme.json'),
};
if (canUseDOM()) {
    document.title = [applicationConfig.title, applicationConfig.subtitle].filter(function (text) { return Boolean(text); }).join(' - ');
}
// ----------------------------------------------------------------------------- Implementation
bootstrap(React.createElement(TechnologyRadar, __assign({}, defaults)), document.querySelector('technology-radar'));
registerServiceWorker();
//# sourceMappingURL=standalone.js.map