
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { FooterComponent as Footer } from './index';

import { mockApplicationState, shallowWithApplicationState } from 'mocks';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithApplicationState(<Footer />, mockApplicationState());

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('renders create button if editable', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { editor: true }));

  expect(element.find('.c-footer__action--create').length).toEqual(1);
});

it('hides create button if not editable', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { editor: false }));

  expect(element.find('.c-footer__action--create').length).toEqual(0);
});

it('renders edit button if owner of document', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { owner: true }));

  expect(element.find('.c-footer__action--create').length).toEqual(0);
});

it('hidees edit button if not owner of document', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { owner: false }));

  expect(element.find('.c-footer__action--create').length).toEqual(0);
});
