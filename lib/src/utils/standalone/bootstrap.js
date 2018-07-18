// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { hydrate, render } from 'react-dom';
import { canUseDOM } from '../dom';
// ----------------------------------------------------------------------------- Configuration
if (canUseDOM()) {
    import('what-input');
}
// ----------------------------------------------------------------------------- Implementation
export function bootstrap(element, rootElement) {
    if (rootElement.hasChildNodes()) {
        hydrate(element, rootElement);
    }
    else {
        render(element, rootElement);
    }
    if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line:no-var-requires
        var whyDidYouUpdate = require('why-did-you-update').whyDidYouUpdate;
        whyDidYouUpdate(React);
    }
}
//# sourceMappingURL=bootstrap.js.map