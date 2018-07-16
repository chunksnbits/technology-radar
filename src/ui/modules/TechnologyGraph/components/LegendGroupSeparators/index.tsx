
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { classNames, styled } from 'utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface LegendGroupSeparatorsProps {
  className?: string;
  classes?: Classes;
  groups?: Group[];
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class LegendGroupSeparators extends PureComponent<LegendGroupSeparatorsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];

    const { groups, classes } = this.props;

    if (!Boolean(groups)) {
      return null;
    }

    const baseAngleDegree = 360 / groups.length;

    return (
      <div className={ classNames(classes.root, this.props.className, ...modifiers) }>{
        groups.map((group, index) =>
          <h4
            key={ group.id }
            className={ classes.legendGroupSeparatorsSeparator }
            style={{
              transform: [,
                'translate(-50%, -50%)',
                `rotateZ(${ index * baseAngleDegree }deg)`,
                'translateX(50%)',
              ].join(' '),
            }} />,
        )
      }</div>
    );
  }
}
