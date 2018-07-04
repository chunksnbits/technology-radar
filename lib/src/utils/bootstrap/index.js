// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { hydrate, render } from 'react-dom';
import { create } from 'react-web-component';
import { canUseDOM } from 'core/utils/dom';
// ----------------------------------------------------------------------------- Configuration
if (canUseDOM()) {
    import('what-input');
}
// ----------------------------------------------------------------------------- Implementation
export function bootstrapWecomponent(AppElement, tagName) {
    create(React.createElement(AppElement, null), tagName);
    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line:no-var-requires
        var whyDidYouUpdate = require('why-did-you-update').whyDidYouUpdate;
        whyDidYouUpdate(React);
    }
}
// ----------------------------------------------------------------------------- Implementation
export function bootstrap(AppElement, rootElement) {
    if (rootElement.hasChildNodes()) {
        hydrate(React.createElement(AppElement, null), rootElement);
    }
    else {
        render(React.createElement(AppElement, null), rootElement);
    }
    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line:no-var-requires
        var whyDidYouUpdate = require('why-did-you-update').whyDidYouUpdate;
        whyDidYouUpdate(React);
    }
}
//# sourceMappingURL=index.js.map