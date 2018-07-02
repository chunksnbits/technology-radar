
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { render, hydrate } from 'react-dom';

import { canUseDOM } from 'core/utils/dom';

if (canUseDOM()) {
  import('what-input');
}

// ----------------------------------------------------------------------------- Implementation
export function bootstrap(AppElement: any, rootElement: HTMLElement): void {
  if (rootElement.hasChildNodes()) {
    hydrate(<AppElement />, rootElement);
  } else {
    render(<AppElement />, rootElement);
  }

  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-var-requires
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
  }
}