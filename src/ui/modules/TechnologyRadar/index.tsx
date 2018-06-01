
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
  render() {
    const { groups, technologies, settings } = this.props.technologyRadar;
    const { selectedTechnology } = this.props.applicationState;

    return (
      <div className={ classNames('c-technology-radar', this.props.className) }
        style={ this.calculateFocusTransforms() }
        onClick={ this.handleDeselect }>
        <div className='c-technology-radar__content'>
          <div className='c-technology-radar__legend'>
            <LegendGroupLabels
              groups={ groups }
              onSelect={ this.handleSelectGroup } />

            <LegendGroupSeparators
              groups={ groups } />

            <LegendLevels
              technologies={ technologies }
              innerRadiusPercent={ settings.innerRadiusPercent }
              outerRadiusPercent={ settings.outerRadiusPercent } />
          </div>

          <div className='c-technology-radar__technologies'>{
            technologies.map((technology) =>
              <TechnologyItem
                key={ technology.id  }
                className='c-technology-radar__item'
                technology={ technology }
                technologyRadar={ this.props.technologyRadar }
                focused={ Boolean(selectedTechnology) && selectedTechnology === technology }
                onSelect={ this.handleSelectTechnology } />
          )}</div>
        </div>
      </div>
    );
  }


  // ----------------------------------------------------------------------------- Event handler methods
  private handleDeselect = (event: React.MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.applicationState.selectGroup(null);
    this.props.applicationState.selectTechnology(null);
  }

  private handleSelectGroup = (group: Group, event: React.MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.applicationState.selectGroup(group);
    this.props.applicationState.selectTechnology(null);

    event.preventDefault();
  }

  private handleSelectTechnology = (technology: Technology, event: React.MouseEvent<HTMLElement>): void => {
    this.props.applicationState.selectTechnology(technology);

    event.preventDefault();
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
