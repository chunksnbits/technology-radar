
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { createRef, MouseEventHandler, PureComponent, RefObject } from 'react';

import { Button } from '@material-ui/core';
import { Classes } from 'jss';

import { styled, classNames } from 'utils';
import { GroupIndicator } from '../../../../components';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListEntryProps {
  className?: string;
  classes?: Classes;
  technology: Technology;
  group: Group;
  focused: boolean;
  focusable: boolean;
  onMouseOver: MouseEventHandler<void>;
  onMouseOut: MouseEventHandler<void>;
  onClick: MouseEventHandler<void>;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
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
      // scrollIntoView(this.elementRef.current, {
      //   block: 'nearest',
      //   behavior: 'smooth',
      // });
    }
  }

  render() {
    const { className, classes, focusable, technology, group, focused, ...buttonProps } = this.props;

    const modifiers = [
      focused && classes.technologyListEntryFocused,
    ];

    return (
      <li className={ classNames(classes.root, className, ...modifiers) }
        style={{
        }}
        ref={ this.elementRef }>
        <Button role='flat'
          fullWidth={ true }
          { ...buttonProps as any }
          className={ classes.technologyListEntryButton }>
          <GroupIndicator
            className={ classes.technologyListEntryGroupIndicator }
            color={ group.color }
            focused={ focused } />

          <span className={ classes.technologyListEntryLabel }>
            { technology.name }
          </span>
        </Button>
      </li>
    );
  }
}