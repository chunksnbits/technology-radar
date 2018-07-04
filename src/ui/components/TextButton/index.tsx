
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { styled, classNames } from 'core/utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TextButtonProps {
  className?: string;
  classes?: Classes,
  onClick: Function;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class TextButton extends PureComponent<TextButtonProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { classes, onClick, children, className } = this.props;

    return (
      <button className={ classNames(classes.root, className) }
        onClick={ onClick as any }>
        { children }
      </button>
    );
  }
}
