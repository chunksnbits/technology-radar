

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { TechnologyPanel } from './index';
import { mockGroup, mockTechnology, noop } from 'mocks';
import { mount, shallow } from 'enzyme';
import { Button, TextField, Select } from '@material-ui/core';
import { ExpansionPanel } from '../../../../components/ExpansionPanel';

const createWithProps = (props: any = {}) => {
  return (
    <TechnologyPanel
      active={ props.active }
      technology={ props.technology || mockTechnology() }
      groups={ props.groups || [mockGroup()] }
      onToggle={ props.onToggle || noop }
      onValueChange={ props.onValueChange || noop }
      onConfirm={ props.onConfirm || noop }
      onDelete={ props.onDelete || noop } />
  );
}

const shallowWithProps = (props: any = {}) => shallow(createWithProps(props));
const mountWithProps = (props: any = {}) => mount(createWithProps(props));

const simulateChangeEvent = (fields, name, value) => {
  return fields.find({ name }).at(0).prop('onChange')({ target: { name, value } });
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithProps();
  expect(element.exists()).toBeTruthy();
});

it('renders expansion panel', () => {
  const element = mountWithProps({
    technology: mockTechnology({ name: 'text' })
  });

  const panel = element.find(ExpansionPanel);
  const header = element.find('.c-technology-panel__title');

  expect(panel.length).toEqual(1);
  expect(header.text()).toEqual('text');
});

it('renders form with correct values', () => {
  const technology = mockTechnology({
    id: 'testid',
    name: 'testname',
    groupId: 'testgroupid',
    level: 2,
    logo: 'testlogo',
    description: 'testdescription'
  });

  const element = mountWithProps({ technology });
  const fields = element.find(TextField);

  expect(fields.find({ name: 'name' }).at(0).prop('value')).toEqual(technology.name);
  expect(fields.find({ name: 'id' }).at(0).prop('value')).toEqual(technology.id);
  expect(fields.find({ name: 'description' }).at(0).prop('value')).toEqual(technology.description);
  expect(fields.find({ name: 'logo' }).at(0).prop('value')).toEqual(technology.logo);
  expect(element.find(Select).at(0).prop('value')).toEqual(technology.groupId);
  expect(fields.find({ name: 'level' }).at(0).prop('value')).toEqual(technology.level);
});

it('calls onChange on any value change', () => {
  const onValueChange = jasmine.createSpy();
  const technology = mockTechnology();

  const element = mountWithProps({ onValueChange, technology });
  const fields = element.find(TextField);

  simulateChangeEvent(fields, 'name', 'testname');
  expect(onValueChange).toHaveBeenCalledWith(technology, 'name', 'testname');

  simulateChangeEvent(fields, 'id', 'testid');
  expect(onValueChange).toHaveBeenCalledWith(technology, 'id', 'testid');

  simulateChangeEvent(fields, 'description', 'testdescription');
  expect(onValueChange).toHaveBeenCalledWith(technology, 'description', 'testdescription');

  simulateChangeEvent(fields, 'logo', 'testlogo');
  expect(onValueChange).toHaveBeenCalledWith(technology, 'logo', 'testlogo');

  simulateChangeEvent(element.find(Select), 'groupId', 'testgroupid');
  expect(onValueChange).toHaveBeenCalledWith(technology, 'groupId', 'testgroupid');

  simulateChangeEvent(fields, 'level', 1);
  expect(onValueChange).toHaveBeenCalledWith(technology, 'level', 1);
});

it('calls onDelete on delete button click', () => {
  const onDelete = jasmine.createSpy();
  const technology = mockTechnology();

  const element = mountWithProps({ onDelete, technology });
  element.find(Button).get(1).props.onClick();

  expect(onDelete).toHaveBeenCalledWith(technology);
});

it('calls onConfirm on confirm button click', () => {
  const onConfirm = jasmine.createSpy();
  const technology = mockTechnology();

  const element = mountWithProps({ onConfirm, technology });
  element.find(Button).get(0).props.onClick();

  expect(onConfirm).toHaveBeenCalledWith(technology);
});

it('calls onToggle on expansion header click', () => {
  const onToggle = jasmine.createSpy();
  const technology = mockTechnology();

  const element = mountWithProps({ onToggle, technology });
  element.find(ExpansionPanel).get(0).props.onToggle(true);

  expect(onToggle).toHaveBeenCalledWith(technology, true);
});
