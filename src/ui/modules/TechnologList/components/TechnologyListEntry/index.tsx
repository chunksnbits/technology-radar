
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Button } from '@material-ui/core';
import { classNames } from 'core/utils/dom';

import { createRef, MouseEventHandler, PureComponent, RefObject } from 'react';

import './styles.scss';
import { GroupIndicator } from 'core/ui/components/GroupIndicator';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListEntryProps {
  className?: string;
  technology: Technology;
  group: Group;
  focused: boolean;
  focusable: boolean;
  onMouseOver: MouseEventHandler<void>;
  onMouseOut: MouseEventHandler<void>;
  onClick: MouseEventHandler<void>;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyListEntry extends PureComponent<TechnologyListEntryProps> {

  elementRef: RefObject<HTMLLIElement>;

  constructor(props) {
    super(props);

    this.elementRef = createRef();
  }

  componentDidUpdate() {
    if (!this.props.focusable) {
      return;
    }

    if (this.props.focused) {
      this.elementRef.current.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
        behavior: 'smooth'
      });
    }
  }

  render() {
    const { className, focusable, technology, group, focused, ...buttonProps } = this.props;

    const modifiers = [
      focused && 'c-technology-list-entry--focused'
    ];

    return (
      <li className={ classNames('c-technology-list-entry', className, ...modifiers) }
        ref={ this.elementRef }>
        <Button role='flat'
          fullWidth={ true }
          { ...buttonProps as any }>
          <GroupIndicator
            className='c-technology-list-entry__group-indicator'
            color={ group.color }
            focused={ focused } />

          <span className='c-technology-list-entry__label'>
            { technology.name }
          </span>
        </Button>
      </li>
    );
  }
}