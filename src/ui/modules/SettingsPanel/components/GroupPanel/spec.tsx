

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { GroupPanel } from './index';
import { mockGroup, noop } from 'mocks';
import { mount, shallow } from 'enzyme';
import { Button, TextField } from '@material-ui/core';
import { ExpansionPanel } from '../../../../components/ExpansionPanel';

const createWithProps = (props: any = {}) => {
  return (
    <GroupPanel
      active={ props.active }
      group={ props.group || mockGroup() }
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
    group: mockGroup({ name: 'text' })
  });

  const panel = element.find(ExpansionPanel);
  const header = element.find('.c-group-panel__group-title');

  expect(panel.length).toEqual(1);
  expect(header.text()).toEqual('text');
});

it('renders form with correct values', () => {
  const group = mockGroup({
    id: 'testid',
    group: 0,
    name: 'testname',
    color: 'testcolor',
    description: 'testdescriptionn'
  });

  const element = mountWithProps({ group });
  const fields = element.find(TextField);

  expect(fields.find({ name: 'name' }).at(0).prop('value')).toEqual(group.name);
  expect(fields.find({ name: 'id' }).at(0).prop('value')).toEqual(group.id);
  expect(fields.find({ name: 'description' }).at(0).prop('value')).toEqual(group.description);
  expect(fields.find({ name: 'color' }).at(0).prop('value')).toEqual(group.color);
});

it('calls onChange on any value change', () => {
  const onValueChange = jasmine.createSpy();
  const group = mockGroup();

  const element = mountWithProps({ onValueChange, group });
  const fields = element.find(TextField);

  simulateChangeEvent(fields, 'name', 'testname');
  expect(onValueChange).toHaveBeenCalledWith(group, 'name', 'testname');

  simulateChangeEvent(fields, 'id', 'testid');
  expect(onValueChange).toHaveBeenCalledWith(group, 'id', 'testid');

  simulateChangeEvent(fields, 'description', 'testdescription');
  expect(onValueChange).toHaveBeenCalledWith(group, 'description', 'testdescription');

  simulateChangeEvent(fields, 'color', 'testcolor');
  expect(onValueChange).toHaveBeenCalledWith(group, 'color', 'testcolor');
});

it('calls onDelete on delete button click', () => {
  const onDelete = jasmine.createSpy();
  const group = mockGroup();

  const element = mountWithProps({ onDelete, group });
  element.find(Button).get(1).props.onClick();

  expect(onDelete).toHaveBeenCalledWith(group);
});

it('calls onConfirm on confirm button click', () => {
  const onConfirm = jasmine.createSpy();
  const group = mockGroup();

  const element = mountWithProps({ onConfirm, group });
  element.find(Button).get(0).props.onClick();

  expect(onConfirm).toHaveBeenCalledWith(group);
});

it('calls onToggle on expansion header click', () => {
  const onToggle = jasmine.createSpy();
  const group = mockGroup();

  const element = mountWithProps({ onToggle, group });
  element.find(ExpansionPanel).get(0).props.onToggle(true);

  expect(onToggle).toHaveBeenCalledWith(group, true);
});
