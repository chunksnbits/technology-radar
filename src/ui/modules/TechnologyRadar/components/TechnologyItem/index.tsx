
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { Ripple } from 'ui/components/Ripple';
import { findGroupForTechnology, calculateTechnologyRotationDegrees, calculateItemOffsetPercent } from '../utils/math';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyItemProps {
  className?: string;
  technology: Technology;
  focused: boolean;
  technologyRadar: TechnologyRadarStore;
  onSelect: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
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
    return props.focused !== this.props.focused || props.technology !== this.props.technology;
  }

  render() {
    const { focused, technology, technologyRadar } = this.props;
    const { groups } = technologyRadar;

    if (!Boolean(groups)) {
      return null;
    }

    const group = findGroupForTechnology(groups, technology);

    if (!Boolean(group)) {
      return null;
    }

    const modifiers = [
      focused && 'c-technology-item--focused'
    ];

    return (
      <div
        className={ classNames('c-technology-item', this.props.className, ...modifiers) }
        style={ this.calculateTransforms(this.props) }
        custom-attribute={ [technology.name, focused].join(', ') }>
        <Ripple position='relative'>
          <button
            className='c-technology-item__item'
            onClick={ this.propagateSelect }
            style={{
              borderColor: group.color
            }
          } />
        </Ripple>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private propagateSelect = (event: React.MouseEvent<HTMLElement>): void => {
    this.props.onSelect(this.props.technology, event);
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
