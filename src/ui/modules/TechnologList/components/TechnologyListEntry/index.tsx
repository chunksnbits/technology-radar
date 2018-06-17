
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Button } from '@material-ui/core';
import { classNames } from 'utils/dom';

import { MouseEventHandler } from 'react';

import './styles.scss';
import { GroupIndicator } from 'ui/components/GroupIndicator';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListEntryProps {
  className?: string;
  technology: Technology;
  group: Group;
  focused: boolean;
  onMouseOver: MouseEventHandler<void>;
  onMouseOut: MouseEventHandler<void>;
  onClick: MouseEventHandler<void>;
}

// ----------------------------------------------------------------------------- Implementation
export function TechnologyListEntry(props: TechnologyListEntryProps) {
  const { technology, group, focused, ...buttonProps } = props;

  const modifiers = [
    focused && 'c-technology-list-entry--focused'
  ];

  return (
    <li className={ classNames('c-technology-list-entry', props.className, ...modifiers) }>
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