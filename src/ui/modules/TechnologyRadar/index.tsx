
// ----------------------------------------------------------------------------- Dependencies
import { Component, CSSProperties } from 'react';
import * as React from 'react';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { consume, compose } from 'utils/store';
import { classNames } from 'utils/dom';

import { TechnologyItem } from './components/TechnologyItem';

import './styles.scss';
import { calculateTechnologyRotationDegrees, calculateItemOffsetPercent, calculateGroupRotationDegrees } from './components/utils/math';
import { LegendGroupLabels } from './components/LegendGroupLabels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';
import { LegendLevels } from './components/LegendLevels';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  applicationState?: ApplicationStateStore;
  technologyRadar?: TechnologyRadarStore;
}

const BASE_TRANSFORM_ROTATE_DEGREES = -10;

// ----------------------------------------------------------------------------- Implementation
export class TechnologyRadarComponent extends Component<TechnologyRadarProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentDidUpdate() {
    const { selectedGroup } = this.props.applicationState;

    if (Boolean(selectedGroup)) {
      return document.body.addEventListener('click', this.handleDeselectGroup);
    }

    document.body.removeEventListener('click', this.handleDeselectGroup);
  }

  render() {
    const { technologies } = this.props.technologyRadar;

    return (
      <div className={ classNames('c-technology-radar', this.props.className) }
        style={ this.calculateFocusTransforms() }>
        <div className='c-technology-radar__content'>
          <div className='c-technology-radar__legend'>
            <LegendGroupLabels />
            <LegendGroupSeparators />
            <LegendLevels />
          </div>

          <div className='c-technology-radar__technologies'>{
            technologies.map((technology) =>
              <TechnologyItem
                key={ technology.id  }
                className='c-technology-radar__item'
                technology={ technology } />
          )}</div>
        </div>
      </div>
    );
  }


  // ----------------------------------------------------------------------------- Event handler methods
  private handleDeselectGroup = () => {
    this.props.applicationState.selectGroup(null);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private calculateFocusTransforms(): CSSProperties{
    const { selectedTechnology, selectedGroup } = this.props.applicationState;

    if (Boolean(selectedTechnology)) {
      return this.calculateFocusedTranfsformForSelectedTechnology();
    }
    if (Boolean(selectedGroup)) {
      return this.calculateFocusedTranfsformForSelectedGroup();
    }

    return {
      transform: [
        'translate(0, 0)',
        `rotateZ(${ BASE_TRANSFORM_ROTATE_DEGREES }deg)`,
      ].join(' ')
    };
  }

  private calculateFocusedTranfsformForSelectedTechnology(): CSSProperties{
    const { selectedTechnology } = this.props.applicationState;

    const itemRotationDegrees = calculateTechnologyRotationDegrees(selectedTechnology, this.props.technologyRadar);
    const itemOffsetPercent = calculateItemOffsetPercent(selectedTechnology, this.props.technologyRadar);

    const rotationDegrees = 180 + 360 - itemRotationDegrees;

    return {
      transform: [
        'scale(4.5)',
        `translateX(${ itemOffsetPercent * 0.9 }%)`,
        `rotateZ(${ rotationDegrees }deg)`,
      ].join(' ')
    }
  }

  private calculateFocusedTranfsformForSelectedGroup(): CSSProperties{
    const { selectedGroup } = this.props.applicationState;
    const { groups } = this.props.technologyRadar;

    const groupBaseRotationDegrees = 360 / groups.length;
    const groupRotationDegrees = calculateGroupRotationDegrees(selectedGroup, this.props.technologyRadar);

    const rotationDegrees = 180 + 360 - (groupRotationDegrees + 0.5 * groupBaseRotationDegrees);

    return {
      transform: [
        'scale(2)',
        `translateX(25%)`,
        `rotateZ(${ rotationDegrees }deg)`,
      ].join(' ')
    }
  }
}

export const TechnologyRadar = compose(
  consume(ApplicationStateContext, { bindTo: 'applicationState' }),
  consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
)(TechnologyRadarComponent);
