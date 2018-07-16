// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { canUseDOM } from '../dom';
// ----------------------------------------------------------------------------- Implementation
export function bootstrapWebComponent(element, tagName) {
    if (!canUseDOM()) {
        return;
    }
    var create = require('react-web-component').create;
    create(element, tagName);
    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line:no-var-requires
        var whyDidYouUpdate = require('why-did-you-update').whyDidYouUpdate;
        whyDidYouUpdate(React);
    }
}
//# sourceMappingURL=bootstrap.js.map