
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { TechnologyRadarContext } from 'store';

import { classNames } from 'utils/dom';
import { consume, compose } from 'utils/store';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface LegendGroupSeparatorsProps {
  className?: string;
  technologyRadar?: TechnologyRadarStore;
}

// ----------------------------------------------------------------------------- Implementation
export class LegendGroupSeparatorsComponent extends Component<LegendGroupSeparatorsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];

    const { groups } = this.props.technologyRadar;

    if (!Boolean(groups)) {
      return null;
    }

    const baseAngleDegree = 360 / groups.length;

    return (
      <div className={ classNames('c-legend-group-separators', this.props.className, ...modifiers) }>{
        groups.map((group, index) =>
          <h4
            key={ group.id }
            className='c-legend-group-separators__separator'
            style={{
              transform: [,
                'translate(-50%, -50%)',
                `rotateZ(${ index * baseAngleDegree }deg)`,
                'translateX(50%)'
              ].join(' ')
            }} />
        )
      }</div>
    );
  }
}

export const LegendGroupSeparators = compose(
  consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
)(LegendGroupSeparatorsComponent);
