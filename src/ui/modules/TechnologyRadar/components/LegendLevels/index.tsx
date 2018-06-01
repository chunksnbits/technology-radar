
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { calculateMaxLevel } from '../utils/math';

// ----------------------------------------------------------------------------- Configuration
export interface LegendLevelsProps {
  className?: string;
  innerRadiusPercent: number;
  outerRadiusPercent: number;
  technologies: Technology[];
}

// ----------------------------------------------------------------------------- Implementation
export class LegendLevels extends PureComponent<LegendLevelsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { innerRadiusPercent, outerRadiusPercent, technologies } = this.props;

    const modifiers = [];

    const maxLevel = calculateMaxLevel(technologies);
    const step = 2 * (outerRadiusPercent - innerRadiusPercent) / maxLevel;
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
