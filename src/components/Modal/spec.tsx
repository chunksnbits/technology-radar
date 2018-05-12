
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './index';

// ----------------------------------------------------------------------------- Helpers methods
const noop = () => { /** nnop */ };

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <Modal open={ false } onClose={ noop }>{/* { } */}</Modal>
  );

  expect(element.exists).toBeTruthy();
});
