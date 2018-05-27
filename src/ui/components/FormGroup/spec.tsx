
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { FormGroup } from './index';

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(
    <FormGroup>
      <input />
    </FormGroup>
  );

  expect(element.exists).toBeTruthy();
});

it('throws error if no child is provided', (done) => {
  try {
    shallow(<FormGroup>{ /** */ }</FormGroup>);
    fail();
  } catch (error) {
    done();
  }
});

it('renders label if provided', () => {
  const element = shallow(<FormGroup label='Text'><input /></FormGroup>);
  expect(element.contains('Text')).toBeTruthy();
});

it('does not render label if not provided', () => {
  const element = shallow(<FormGroup><input /></FormGroup>);
  expect(element.find('label').length).toEqual(0);
});

it('wires label with input automatically', () => {
  const element = shallow(<FormGroup label='Text'><input /></FormGroup>);
  const label = element.find('label');
  const id = label.getElement().props.htmlFor;

  expect(element.find(`input[name="${ id }"]`).length).toEqual(1);
});

it('reuses input element\'s name if provided', () => {
  const element = shallow(<FormGroup label='Text'><input name='test' /></FormGroup>);
  const label = element.find('label');

  expect(label.getElement().props.htmlFor).toEqual('test');
});
