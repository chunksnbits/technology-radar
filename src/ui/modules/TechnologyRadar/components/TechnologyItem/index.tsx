
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'core/utils/dom';

import { Ripple } from 'core/ui/components/Ripple';
import { GroupIndicator } from 'core/ui/components/GroupIndicator';

import { findGroupForTechnology, calculateTechnologyRotationDegrees, calculateItemOffsetPercent } from '../utils/math';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyItemProps {
  className?: string;
  technology: Technology;
  focused: boolean;
  selected: boolean;
  groups?: Group[];
  technologies?: Technology[];
  settings?: TechnologyRadarSettings;
  onSelect?: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
  onMouseOver?: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
  onMouseOut?: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyItem extends Component<TechnologyItemProps> {
  // ----------------------------------------------------------------------------- Lifecycle methods
  shouldComponentUpdate(props: TechnologyItemProps): boolean {
    return props.selected !== this.props.selected ||
      props.technology !== this.props.technology ||
      props.focused !== this.props.focused;

  }

  render() {
    const { focused, selected, technology, groups } = this.props;
    if (!Boolean(groups)) {
      return null;
    }

    const group = findGroupForTechnology(groups, technology);

    if (!Boolean(group)) {
      return null;
    }

    const modifiers = [
      selected && 'c-technology-item--selected',
    ];

    return (
      <div
        className={ classNames('c-technology-item', this.props.className, ...modifiers) }
        style={ this.calculateTransforms(this.props) }
        custom-attribute={ [technology.name, selected].join(', ') }>
        <Ripple position='relative'>
          <GroupIndicator
            className='c-technology-item__item'
            color={ group.color }
            focused={ focused }
            onClick={ this.propagateSelect }
            onMouseOver={ this.propagateMouseOver }
            onMouseOut={ this.propagateMouseOut } />
        </Ripple>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private propagateSelect = (event: React.MouseEvent<HTMLElement>): void => {
    this.props.onSelect(this.props.technology, event);
  }

  private propagateMouseOver = (event: React.MouseEvent<HTMLElement>): void => {
    this.props.onMouseOver(this.props.technology, event);
  }

  private propagateMouseOut = (event: React.MouseEvent<HTMLElement>): void => {
    this.props.onMouseOut(this.props.technology, event);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private calculateTransforms(props: TechnologyItemProps): { transform: string, width: string} {
    const { technology, groups, technologies, settings } = this.props;

    if (typeof technology.groupId !== 'string') {
      return null
    }

    return {
      transform: `rotateZ(${ calculateTechnologyRotationDegrees(technology, groups, technologies) }deg)`,
      width: `${ calculateItemOffsetPercent(technology, technologies, settings) }%`,
    };
  }
}
