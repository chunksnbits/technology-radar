import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Footer } from './index';

import { mockApplicationState, shallowWithApplicationState } from 'mocks';
import { ViewToggle } from './components/view-toggle';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithApplicationState(<Footer />, mockApplicationState());

  expect(element.exists).toBeTruthy();
  element.unmount();
});


it('renders toggle view button', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { viewMode: 'list' }));
  expect(element.find(ViewToggle).props().viewMode).toEqual('list');
});
