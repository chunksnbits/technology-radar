
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface LegendProps {
  className?: string;
  technologies: Technology[];
  groups: Group[];
  settings: TechnologyRadarSettings;
  onSelectGroup: (group: Group) => any;
}

// SVG follows a different coordinate system.
// Thus add some static adjustment to labels to match them up with rendered items.
//
const SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES = -90;

// ----------------------------------------------------------------------------- Implementation
export class Legend extends Component<LegendProps> {

  // ----------------------------------------------------------------------------- Event handler methods
  propagateSelectGroup: (group: Group) => () => void = (group: Group) => {
    return () => {
      this.props.onSelectGroup(group);
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];

    return (
      <div className={ classNames('c-legend', this.props.className, ...modifiers) }>
        <div className='c-legend__labels'>
          <svg viewBox='0 0 100 100' className='c-legend__labels-element'>
            <defs>
              <path d={ 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0' } fill='none' />
            </defs>

            <circle cx='50' cy='50' r='49.45' className='c-legend__labels-background' vectorEffect='non-scaling-stroke' />

            <g className='c-legend__labels-group'
              style={{
                transform: `rotateZ(${SVG_ROTATION_SOURCE_ADJUSTMENT_DEGREES}deg)`,
                transformOrigin: 'center'
              }}>
              { this.renderLabels(this.props.groups) }
            </g>
          </svg>
        </div>

        <div className='c-legend__groups'>
          { this.renderGroups(this.props.groups) }
        </div>

        <div className='c-legend__levels'>
          { this.renderLevels(this.props.technologies, this.props.settings) }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderLabels(groups: Group[]) {
    const baseAngleDegree = 360 / groups.length;
    const circumference = 2 * Math.PI * 50;
    const offset = circumference / groups.length;

    return groups.map((group, index) => {

      return (
        <text
          key={ group.id }
          className='c-legend__label'
          style={{
            transform: [
              `rotateZ(${index * baseAngleDegree + 0.5 * baseAngleDegree}deg)`
            ].join(' ')
          }}
          onClick={ this.propagateSelectGroup(group) }>
          <textPath
            alignmentBaseline='baseline'
            xlinkHref='#c-legend__text-path'
            startOffset={ String(offset) }>
            { group.name }
          </textPath>
        </text>
      );
    });
  }

  private renderLevels(technologies: Technology[], settings: TechnologyRadarSettings): ReactNode {
    const maxLevel = this.getMaxLevel(technologies);
    const step = 2 * (settings.outerRadiusPercent - settings.innerRadiusPercent) / maxLevel;

    return new Array(maxLevel).fill(null).map((_, index) => {
      const level = index + 1;
      const size = 2 * settings.innerRadiusPercent + level * step;

      return (
        <div
          key={ index.toString() }
          className='c-legend__level'
          style={{
            height: `${size}%`,
            width: `${size}%`,
          }} />
      );
    });
  }

  private renderGroups(groups: Group[]) {
    const baseAngleDegree = 360 / groups.length;

    return groups.map((group, index) => {
      return (
        <h4
          key={ group.id }
          className='c-legend__group'
          style={{
            transform: [
              'translateX(25%)',
              `rotateZ(${ index * baseAngleDegree }deg)`
            ].join(' ')
          }} />
      )
    });
  }

  private getMaxLevel(technologies: Technology[]): number {
    return technologies.reduce((result, technology) => Math.max(result, technology.level), 0);
  }
}
