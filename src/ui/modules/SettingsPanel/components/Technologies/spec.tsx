
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Technologies } from './index';
import { mockTechnology, noop } from 'mocks';
import { mount, shallow } from 'enzyme';
import { TechnologyPanel } from '../TechnologyPanel';
import { Button } from '@material-ui/core';

const createWithProps = (props: any = {}) => {
  return (
    <Technologies
      technologies={ props.technologies || [] }
      groups= { props.groups || [] }
      activeTechnology={ props.activeTechnology || null }
      onAdd={ props.onAdd || noop }
      onToggle={ props.onToggle || noop }
      onChange={ props.onChange || noop }
      onConfirm={ props.onConfirm || noop }
      onClear={ props.onClear || noop }
      onDelete={ props.onDelete || noop } />
  );
}

const shallowWithProps = (props: any = {}) => shallow(createWithProps(props));

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithProps();
  expect(element.exists()).toBeTruthy();
});

it('renders the right number of technologies', () => {
  const single = shallowWithProps({
    technologies: [mockTechnology()]
  });

  expect(single.find(TechnologyPanel).length).toEqual(1);

  const multiple = shallowWithProps({
    technologies: [mockTechnology(), mockTechnology()]
  });

  expect(multiple.find(TechnologyPanel).length).toEqual(2);
});

it('renders the add and clear buttons', () => {
  const element = shallowWithProps({
    technologies: [mockTechnology()]
  });

  const buttons = element.find(Button);

  expect(mount(buttons.get(0)).text().toLowerCase()).toContain('add');
  expect(mount(buttons.get(1)).text().toLowerCase()).toContain('clear');
});

it('triggers onClear when on clear button is clicked', () => {
  const onClear = jasmine.createSpy();

  const element = shallowWithProps({
    technologies: [mockTechnology()],
    onClear
  });

  const buttonProps = mount(element.find(Button).get(1)).props() as any;

  buttonProps.onClick();

  expect(onClear).toHaveBeenCalled();
});

it('triggers onAdd when on add button is clicked', () => {
  const onAdd = jasmine.createSpy();

  const element = shallowWithProps({
    technologies: [mockTechnology()],
    onAdd
  });

  const buttonProps = mount(element.find(Button).get(0)).props() as any;

  buttonProps.onClick();

  expect(onAdd).toHaveBeenCalled();
});
