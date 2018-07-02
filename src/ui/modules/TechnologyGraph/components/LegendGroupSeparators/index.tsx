
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { classNames } from 'core/utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface LegendGroupSeparatorsProps {
  className?: string;
  groups?: Group[];
}

// ----------------------------------------------------------------------------- Implementation
export class LegendGroupSeparators extends PureComponent<LegendGroupSeparatorsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];

    const { groups } = this.props;


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
