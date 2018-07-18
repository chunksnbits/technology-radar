
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { canUseDOM } from '../dom';

// ----------------------------------------------------------------------------- Implementation
export function bootstrapWebComponent(element: JSX.Element, tagName: string): void {
  if (!canUseDOM()) {
    return;
  }
  const { create } = require('react-web-component');

  create(element, tagName);

  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-var-requires
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React);
  }
}
