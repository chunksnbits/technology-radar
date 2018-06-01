
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { Ripple } from 'ui/components/Ripple';
import { consume, compose } from 'utils/store';
import { TechnologyRadarContext, ApplicationStateContext } from 'store';
import { findGroupForTechnology, calculateTechnologyRotationDegrees, calculateItemOffsetPercent } from '../utils/math';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyItemProps {
  className?: string;
  technology: Technology;
  applicationState?: ApplicationStateStore;
  technologyRadar?: TechnologyRadarStore;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyItemComponent extends Component<TechnologyItemProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  /**
   * Custom rerender optimization.
   *
   * Rerender is restricted to state changes that take effect on this specific item.
   * Other state changes will be ignored.
   */
  shouldComponentUpdate(props: TechnologyItemProps) {
    // 1. Rerender if the item itself has changed
    if (props.technology !== this.props.technology) {
      return true;
    }

    // 2. Escape if selectedTechnology has not changed
    const { selectedTechnology } = props.applicationState;
    const { selectedTechnology: previousSelection } = this.props.applicationState;

    if (selectedTechnology === previousSelection) {
      return false;
    }


    // 3. Rerender if this item has become selected
    if (Boolean(selectedTechnology) && selectedTechnology.id === this.props.technology.id) {
      return true;
    }

    // 4. Rerender if this item has become unselected
    return Boolean(previousSelection) && previousSelection.id === this.props.technology.id;
  }

  render() {
    const { applicationState, technology, technologyRadar } = this.props;
    const { selectedTechnology } = applicationState;
    const { groups } = technologyRadar;

    if (!Boolean(groups)) {
      return null;
    }

    const group = findGroupForTechnology(groups, technology);

    if (!Boolean(group)) {
      return null;
    }

    const modifiers = [
      selectedTechnology && selectedTechnology.id === technology.id && 'c-technology-item--focused'
    ];

    return (
      <div
        className={ classNames('c-technology-item', this.props.className, ...modifiers) }
        style={ this.calculateTransforms(this.props) }
        custom-attribute={ [technology.name, selectedTechnology && selectedTechnology.name].join(', ') }>
        <Ripple position='relative'>
          <button
            className='c-technology-item__item'
            onClick={ this.handleSelect as any }
            style={{
              borderColor: group.color
            }
          } />
        </Ripple>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private handleSelect = (event: MouseEvent): void => {
    this.props.applicationState.selectTechnology(this.props.technology);

    event.preventDefault();
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

export const TechnologyItem = compose(
  consume(ApplicationStateContext, { bindTo: 'applicationState' }),
  consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
)(TechnologyItemComponent);
