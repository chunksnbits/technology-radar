
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
export function bootstrapWecomponent(element: JSX.Element, tagName: string): void {
  create(element, tagName);

  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-var-requires
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
  }
}

// ----------------------------------------------------------------------------- Implementation
export function bootstrap(element: JSX.Element, rootElement: HTMLElement): void {
  if (rootElement.hasChildNodes()) {
    hydrate(element, rootElement);
  } else {
    render(element, rootElement);
  }

  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-var-requires
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
  }
}
