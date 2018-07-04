
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { styled, classNames } from 'core/utils';

import { calculateMaxLevel } from '../utils/math';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface LegendLevelsProps {
  className?: string;
  classes?: Classes;
  innerRadiusPercent: number;
  outerRadiusPercent: number;
  technologies: Technology[];
  levels: Level[];
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class LegendLevels extends PureComponent<LegendLevelsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { innerRadiusPercent, outerRadiusPercent, technologies, levels, classes } = this.props;

    const modifiers = [];

    const maxLevel = calculateMaxLevel(technologies);
    const step = 2 * (outerRadiusPercent - innerRadiusPercent) / maxLevel;

    const size = (index) => {
      return 2 * innerRadiusPercent + (index + 1) * step;
    };

    return (
      <div className={ classNames(classes.root, this.props.className, ...modifiers) }>{
        levels.map((_, index) =>
          <div
            key={ index.toString() }
            className={ classes.legendLevelsLevel }
            style={{
              height: `${ size(index) }%`,
              width: `${ size(index) }%`,
            }}>
            <span className={ classes.legendLevelsLevelLabel }>
              { levels[Math.max(0, maxLevel - index - 1)].name }
            </span>
          </div>,
        )
      }</div>
    );
  }
}
