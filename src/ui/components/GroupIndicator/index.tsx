
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MouseEventHandler, PureComponent } from 'react';

import { Classes } from 'jss';

import { classNames } from 'core/utils/dom';
import { styled } from 'utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface GroupIndicatorProps {
  className?: string;
  classes?: Classes;
  color: string;
  focused: boolean;
  large?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onMouseOver?: MouseEventHandler<HTMLSpanElement>;
  onMouseOut?: MouseEventHandler<HTMLSpanElement>;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class GroupIndicator extends PureComponent<GroupIndicatorProps> {
  render() {
    const { classes, className, focused, large, color, onClick, onMouseOver, onMouseOut } = this.props;

    const modifiers= [
      focused && classes.groupIndicatorFocused,
      large && classes.groupIndicatorLarge,
    ];

    return (
      <span
        className={ classNames(classes.groupIndicator, className, ...modifiers) }
        style={{
          borderColor: color,
        }}
        onClick={ onClick }
        onMouseOver={ onMouseOver }
        onMouseOut={ onMouseOut } />
    );
  };
}
