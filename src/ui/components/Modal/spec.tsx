import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { createClasses, extractSelectors } from 'mocks';

import { Modal } from './index';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Helpers methods
const handleClose = jest.fn(() => { /** noop */ });

const classes = createClasses(styles);
const selectors = extractSelectors(classes);

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <Modal open={ false } classes={ classes } onClose={ handleClose } position='parent'>{/* { } */}</Modal>,
  );

  expect(element.exists).toBeTruthy();
});

it('renders closed if open prop is false', () => {
  const element = shallow(
    <Modal open={ false } classes={ classes } onClose={ handleClose } position='parent'>{/* { } */}</Modal>,
  );

  expect(element.prop('open')).toBeFalsy();
});

it('renders opened if open prop is set', () => {
  const element = mount(
    <Modal open={ true } classes={ classes } onClose={ handleClose } position='parent'>{/* { } */}</Modal>,
  );

  expect(element.prop('open')).toBeTruthy();
});

it('renders modal children as content', () => {
  const element = shallow(
    <Modal open={ true } classes={ classes } onClose={ handleClose } position='parent'>Test</Modal>,
  );

  expect(element.text()).toContain('Test');
});

it('renders navigation', () => {
  const element = shallow(
    <Modal open={ true } classes={ classes } onClose={ handleClose } position='parent'>Test</Modal>,
  );

  expect(element.find(selectors.modalNav).length).toBe(1);
});

it('closes on navigation close button click', () => {
  const element = shallow(
    <Modal open={ true } classes={ classes } onClose={ handleClose } position='parent'>{/* { } */}</Modal>,
  );

  element.find(selectors.modalNavActionClose).simulate('click');

  expect(handleClose).toHaveBeenCalled();
});

it('closes on click outside modal', () => {
  const parent = shallow(
    <div>
      <Modal open={ true } classes={ classes } onClose={ handleClose } position='parent'>{/* { } */}</Modal>
    </div>,
  );

  parent.simulate('click');

  expect(handleClose).toHaveBeenCalled();
});
