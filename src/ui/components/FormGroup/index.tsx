
// ----------------------------------------------------------------------------- Dependencies
import { Component, Children, cloneElement } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface FormGroupProps {
  className?: string;
  label: string;
  name?: string;
}

// ----------------------------------------------------------------------------- Implementation
export class FormGroup extends Component<FormGroupProps> {

  private id = `form-group-${ Math.floor(Math.random() * 1000) }`;

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];

    const child = Children.only(this.props.children);
    const name = child.props.name || this.id;

    return (
      <div className={ classNames('c-form-group', this.props.className, ...modifiers) }>
        <label htmlFor={ this.props.name || this.id } className='c-form-group__label'>
          { this.props.label }
        </label>
        <span className='c-form-group__input'>
          { cloneElement(child, { className: 'c-form-group__input-element', name  }) }
        </span>
      </div>
    );
  }
}
