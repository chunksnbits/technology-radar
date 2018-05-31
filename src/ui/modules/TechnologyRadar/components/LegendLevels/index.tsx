
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { TechnologyRadarContext } from 'store';
import { calculateMaxLevel } from '../utils/math';
import { consume } from 'utils/store';

// ----------------------------------------------------------------------------- Configuration
export interface LegendLevelsProps {
  className?: string;
  technologyRadar?: TechnologyRadarStore;
}

// ----------------------------------------------------------------------------- Implementation
export class LegendLevelsComponent extends Component<LegendLevelsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { settings, technologies } = this.props.technologyRadar;

    if (!Boolean(settings) || !Boolean(technologies)) {
      return null;
    }

    const { innerRadiusPercent } = settings;

    const modifiers = [];

    const maxLevel = calculateMaxLevel(technologies);
    const step = 2 * (settings.outerRadiusPercent - settings.innerRadiusPercent) / maxLevel;
    const levels = new Array(maxLevel).fill(null);

    const size = (index) => {
      return 2 * innerRadiusPercent + (index + 1) * step;
    };

    return (
      <div className={ classNames('c-legend-levels', this.props.className, ...modifiers) }>{
        levels.map((_, index) =>
          <div
            key={ index.toString() }
            className='c-legend-levels__level'
            style={{
              height: `${ size(index) }%`,
              width: `${ size(index) }%`,
            }} />
        )
      }</div>
    );
  }
}

export const LegendLevels = consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })(LegendLevelsComponent);
