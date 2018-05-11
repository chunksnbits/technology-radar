
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { TechnologyItem } from 'components/Technology-Item';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  technologies: Technology[];
  groups: Group[];
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyRadar extends Component<TechnologyRadarProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [

    ];

    return (
      <div className={ classNames('c-technology-radar', this.props.className, ...modifiers) }>
        <div className='c-technology-radar__groups'>
          { this.renderGroups(this.props.groups) }
        </div>

        <div className='c-technology-radar__levels'>
          { this.renderLevels(this.props.technologies) }
        </div>

        <div className='c-technology-radar__technologies'>
          { this.renderTechnologies(this.props.technologies) }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderTechnologies(technologies: Technology[]) {

    const maxLevel = this.getMaxLevel(technologies);

    return technologies.map((technology) => {
      return (
        <TechnologyItem
          key={ technology.id }
          technology={ technology }
          technologies={ technologies }
          maxLevel={ maxLevel }
          group={ this.findGroup(technology, this.props.groups) }
          onSelect={ (event) => window.console.log('+++ onSelect', event) } />
      )
    });
  }

  private renderLevels(technologies: Technology[]) {
    const maxLevel = this.getMaxLevel(technologies);
    const step = 100 / maxLevel;

    return new Array(maxLevel).fill(null).map((_, index) => {
      const level = index + 1;

      return (
        <div key={index}
          className='c-technology-radar__level'
          style={{
            height: `${level * step}vmin`,
            width: `${level * step}vmin`,
          }} />
      )
    });
  }

  private renderGroups(groups: Group[]) {
    const baseAngle = 360 / groups.length;

    return groups.map((_, index) => {
      return (
        <div key={index}
          className='c-technology-radar__group'
          style={{
            transform: [
              'translateX(25vmin)',
              // `rotateZ(${ -1 * baseAngle }deg)`,
              `rotateZ(${ index * baseAngle }deg)`
            ].join(' ')
          }} />
      )
    });
  }

  private getMaxLevel(technologies: Technology[]): number {
    return technologies.reduce((result, technology) => Math.max(result, technology.level), 0);
  }

  private findGroup(technology: Technology, groups: Group[]): Group {
    return groups.find(group => group.id === technology.groupId);
  }
}
