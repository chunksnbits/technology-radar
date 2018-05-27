
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './index';

// ----------------------------------------------------------------------------- Helpers methods
const handleClose = jest.fn(() => { /** noop */ });

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <Modal open={ false } onClose={ handleClose } position='parent'>{/* { } */}</Modal>
  );

  expect(element.exists).toBeTruthy();
});

it('renders closed if open prop is false', () => {
  const element = shallow(
    <Modal open={ false } onClose={ handleClose } position='parent'>{/* { } */}</Modal>
  );

  expect(element.prop('open')).toBeFalsy();
});

it('renders opened if open prop is set', () => {
  const element = shallow(
    <Modal open={ true } onClose={ handleClose } position='parent'>{/* { } */}</Modal>
  );

  expect(element.prop('open')).toBeTruthy();
});

it('renders modal children as content', () => {
  const element = shallow(
    <Modal open={ true } onClose={ handleClose } position='parent'>Test</Modal>
  );

  expect(element.text()).toContain('Test');
});

it('renders navigation', () => {
  const element = shallow(
    <Modal open={ true } onClose={ handleClose } position='parent'>Test</Modal>
  );

  expect(element.find('.c-modal__nav').length).toBe(1);
});

it('closes on navigation close button click', () => {
  const element = shallow(
    <Modal open={ true } onClose={ handleClose } position='parent'>{/* { } */}</Modal>
  );

  element.find('.c-modal__nav-action--close').simulate('click');

  expect(handleClose).toHaveBeenCalled();
});

it('closes on click outside modal', () => {
  const parent = shallow(
    <div>
      <Modal open={ true } onClose={ handleClose } position='parent'>{/* { } */}</Modal>
    </div>
  );

  parent.simulate('click');

  expect(handleClose).toHaveBeenCalled();
});
