
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, Children, cloneElement, ReactNode } from 'react';
import * as React from 'react';

import { classNames, styled } from 'utils';
import { styles } from './styles.jss';
import { Classes } from 'jss';

// ----------------------------------------------------------------------------- Configuration
export interface FormGroupProps {
  readonly children: ReactNode;
  classes?: Classes;
  className?: string;
  label?: string;
  name?: string;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class FormGroup extends PureComponent<FormGroupProps> {
  private id = `form-group-${ Math.floor(Math.random() * 1000) }`;

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { className, children, classes, label } = this.props;

    if (Children.count(children) !== 1) {
      throw new Error(`INVALID_PROPS. Expected element 'FormGroup' to have exactly one child.`)
    }


    const child = Children.only(children);
    const name = child.props.name || this.id;

    return (
      <div className={ classNames(classes.root, className) }>
        {
          label &&
          <label htmlFor={ name } className={ classes.formGroupLabel }>
            { label }
          </label>
        }
        <span className={ classes.formGroupInput }>
          { cloneElement(child, { className: 'c-form-group__input-element', name  }) }
        </span>
      </div>
    );
  }
}
