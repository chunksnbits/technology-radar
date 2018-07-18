
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, MouseEventHandler, ReactNode } from 'react';
import * as React from 'react';
import { Classes } from 'jss';

import { classNames, styled } from 'utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface LegendGroupLabelsProps {
  className?: string;
  classes?: Classes;
  groups: Group[];
  onSelect: (group: Group, event: React.MouseEvent<SVGTextElement>) => any;
}

// SVG follows a different coordinate system.
// Thus add some static adjustment to labels to match them up with rendered items.
//
const SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES = -180;

const LABEL_PATH_ID = 'c-legend-group-labels__text-path';

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class LegendGroupLabels extends PureComponent<LegendGroupLabelsProps> {

  handlers: BoundHandlers<MouseEventHandler<SVGTextElement>> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { groups, classes } = this.props;

    if (!Boolean(groups)) {
      return null;
    }

    return (
      <div className={ classNames(classes.root, this.props.className) }>
        <svg viewBox='0 0 100 100' className={ classes.legendGroupLabelsElement }>
          <defs>
            <path d={ 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0' } fill='none' />
          </defs>

          <path d={ 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0' } id={ LABEL_PATH_ID } fill='none' />

          <g
            className={ classes.legendGroupLabelsGroup }
            style={{
              transform: `rotateZ(${ SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES + (360 / groups.length)  }deg)`,
            }}>
            { this.renderLabels(groups, classes) }
          </g>
        </svg>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event hanndler methods
  bindSelectGroupHandler(group: Group): MouseEventHandler<SVGTextElement> {
    const name = `select-group-${ group.id }`;

    if (!Boolean(this.handlers[name])) {
      this.handlers[name] = (event: React.MouseEvent<SVGTextElement>) => {
        this.props.onSelect(group, event);
      };
    }

    return this.handlers[name];
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderLabels(groups: Group[], classes: Classes): ReactNode {
    const baseAngleDegree = 360 / groups.length;
    const circumference = 2 * Math.PI * 50;
    const offset = circumference / groups.length;

    return groups.map((group, index) => {

      return (
        <text
          key={ group.id }
          className={ classes.legendGroupLabelsLabel }
          style={{
            transform: [
              `rotateZ(${index * baseAngleDegree + 0.5 * baseAngleDegree}deg)`,
            ].join(' '),
          }}
          onClick={ this.bindSelectGroupHandler(group) }>
          <textPath
            alignmentBaseline='baseline'
            xlinkHref={ `#${ LABEL_PATH_ID }` }
            startOffset={ String(offset) }>
            { group.name }
          </textPath>
        </text>
      );
    });
  }
}
