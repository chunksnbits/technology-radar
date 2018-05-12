
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { TechnologyItem } from 'components/TechnologyItem';
import { Legend } from 'components/Legend';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  technologies: Technology[];
  groups: Group[];
  applicationState: ApplicationState;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyRadar extends Component<TechnologyRadarProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [

    ];

    return (
      <div className={ classNames('c-technology-radar', this.props.className, ...modifiers) }>
        <div className='c-technology-radar__legend'>
          <Legend technologies={ this.props.technologies } groups={ this.props.groups } />
        </div>

        <div className='c-technology-radar__technologies'>
          { this.renderTechnologies(this.props.technologies) }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  handleSelect = (selected: Technology) => {
    this.props.applicationState.selectTechnology(selected);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderTechnologies(technologies: Technology[]) {

    const maxLevel = this.getMaxLevel(technologies);

    return technologies.map((technology) => {
      return (
        <TechnologyItem
          className='c-technology-radar__item'
          key={ technology.id }
          technology={ technology }
          technologies={ technologies }
          maxLevel={ maxLevel }
          group={ this.findGroup(technology, this.props.groups) }
          onSelect={ this.handleSelect } />
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
