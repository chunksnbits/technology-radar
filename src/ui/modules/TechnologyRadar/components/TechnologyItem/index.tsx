
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import { Ripple } from 'ui/components/Ripple';
import { GroupIndicator } from 'ui/components/GroupIndicator';

import { findGroupForTechnology, calculateTechnologyRotationDegrees, calculateItemOffsetPercent } from '../utils/math';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyItemProps {
  className?: string;
  technology: Technology;
  focused: boolean;
  selected: boolean;
  technologyRadar: TechnologyRadarStore;
  onSelect: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
  onMouseOver: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
  onMouseOut: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyItem extends Component<TechnologyItemProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  /**
   * Custom rerender optimization.
   *
   * Rerender is restricted to state changes that take effect on this specific item.
   * State changes that were used purely for initial render will be ignored.
   */
  shouldComponentUpdate(props: TechnologyItemProps) {
    return props.selected !== this.props.selected ||
      props.technology !== this.props.technology ||
      props.focused !== this.props.focused;
  }

  render() {
    const { focused, selected, technology, technologyRadar } = this.props;
    const { groups } = technologyRadar;

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
    const { technology, technologyRadar } = this.props;

    if (typeof technology.groupId !== 'string') {
      return null
    }

    return {
      transform: `rotateZ(${ calculateTechnologyRotationDegrees(technology, technologyRadar) }deg)`,
      width: `${ calculateItemOffsetPercent(technology, technologyRadar) }%`,
    };
  }
}
