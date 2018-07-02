
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MouseEventHandler } from 'react';

import './styles.scss';
import { classNames } from 'core/utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface GroupIndicatorProps {
  className?: string;
  color: string;
  focused: boolean;
  large?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onMouseOver?: MouseEventHandler<HTMLSpanElement>;
  onMouseOut?: MouseEventHandler<HTMLSpanElement>;
}

// ----------------------------------------------------------------------------- Implementation
export const GroupIndicator = (props: GroupIndicatorProps) => {
  const modifiers= [
    props.focused && 'c-group-indicator--focused',
    props.large && 'c-group-indicator--large',
  ];

  return (
    <span
      className={ classNames('c-group-indicator', props.className, ...modifiers) }
      style={{
        borderColor: props.color,
      }}
      onClick={ props.onClick }
      onMouseOver={ props.onMouseOver }
      onMouseOut={ props.onMouseOut } />
  );
};
