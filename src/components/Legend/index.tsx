
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface LegendProps {
  className?: string;
  technologies: Technology[];
  groups: Group[];
}

// ----------------------------------------------------------------------------- Implementation
export class Legend extends Component<LegendProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [

    ];

    const d = 'M0,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0';

    return (
      <div className={ classNames('c-legend', this.props.className, ...modifiers) }>
        <div className='c-legend__labels'>
          <svg viewBox='0 0 100 100'>
            <defs>
              <path d={ d } id='c-legend__text-path' fill='none' />
            </defs>

            { this.renderLabels(this.props.groups) }
          </svg>
        </div>

        <div className='c-legend__groups'>
          { this.renderGroups(this.props.groups) }
        </div>

        <div className='c-legend__levels'>
          { this.renderLevels(this.props.technologies) }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderLabels(groups: Group[]) {
    const circumference = 2 * Math.PI * 50;
    const offset = circumference / groups.length;

    return groups.map((group, index) => {

      return (
        <text key={group.id}
          className='c-legend__label'
          style={{
            transform: `rotateZ(${index * 90 + 45}deg)`
          }}>
          <textPath
            alignmentBaseline='text-after-edge'
            xlinkHref='#c-legend__text-path'
            startOffset={ String(offset) }>
            { group.name }
          </textPath>
        </text>
      );
    });
  }

  private renderLevels(technologies: Technology[]) {
    const maxLevel = this.getMaxLevel(technologies);
    const step = 100 / maxLevel;

    return new Array(maxLevel).fill(null).map((_, index) => {
      const level = index + 1;

      return (
        <div key={index}
          className='c-legend__level'
          style={{
            height: `${level * step}vmin`,
            width: `${level * step}vmin`,
          }} />
      )
    });
  }

  private renderGroups(groups: Group[]) {
    const baseAngle = 360 / groups.length;

    return groups.map((group, index) => {
      return (
        <h4 key={index}
          className='c-legend__group'
          style={{
            transform: [
              'translateX(25vmin)',
              `rotateZ(${ index * baseAngle }deg)`
            ].join(' ')
          }} />
      )
    });
  }

  private getMaxLevel(technologies: Technology[]): number {
    return technologies.reduce((result, technology) => Math.max(result, technology.level), 0);
  }
}
