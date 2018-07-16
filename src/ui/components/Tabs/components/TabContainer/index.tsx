
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { styled, classNames } from 'utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TabContainerProps {
  className?: string;
  classes: Classes;
  active: boolean;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class TabBody extends PureComponent<TabContainerProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { classes } = this.props;

    const modifiers = [
      this.props.active && classes.tabContainerActive,
    ];

    return (
      <div className={ classNames(classes.root, this.props.className, ...modifiers) }>
        { this.props.children }
      </div>
    );
  }
}
