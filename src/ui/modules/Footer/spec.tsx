import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Footer } from './index';

import { mockApplicationState, shallowWithApplicationState } from 'mocks';
import { CreateNewAction } from './components/create-new-action';
import { EditModeToggle } from './components/edit-mode-toggle';
import { ViewToggle } from './components/view-toggle';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithApplicationState(<Footer />, mockApplicationState());

  expect(element.exists).toBeTruthy();
  element.unmount();
});

it('renders create button if editable', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { owner: true }));

  expect(element.find(CreateNewAction).props().show).toEqual(true);
});

it('hides create button if not editable', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { owner: false }));

  expect(element.find(CreateNewAction).props().show).toEqual(false);
});

it('renders edit button if owner of document', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { editor: true }));

  expect(element.find(EditModeToggle).props().show).toEqual(true);
});

it('hides edit button if not owner of document', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { editor: false }));

  expect(element.find(EditModeToggle).props().show).toEqual(false);
});

it('renders toggle view button', () => {
  const element = shallowWithApplicationState(<Footer />, Object.assign(mockApplicationState(), { viewMode: 'list' }));
  expect(element.find(ViewToggle).props().viewMode).toEqual('list');
});
