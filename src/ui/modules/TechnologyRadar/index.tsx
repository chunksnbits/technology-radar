
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { classNames } from 'utils/dom';
import { TechnologyItem } from './components/TechnologyItem';
import { Legend } from './components/Legend';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  applicationState: ApplicationState;
}

const BASE_TRANSFORM_ROTATE_DEGREES = -10;

// ----------------------------------------------------------------------------- Implementation
@observer
export class TechnologyRadar extends Component<TechnologyRadarProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentDidUpdate() {
    if (Boolean(this.props.applicationState.selectedGroup)) {
      return document.body.addEventListener('click', this.handleDeselectGroup);
    }

    document.body.removeEventListener('click', this.handleDeselectGroup);
  }

  render() {
    const { technologies, selectedGroup, groups, settings } = this.props.applicationState;

    const modifiers = [];

    return (
      <div className={ classNames('c-technology-radar', this.props.className, ...modifiers) }
        style={ this.calculateTransforms(selectedGroup, groups) }>
        <div className='c-technology-radar__content'>
          <div className='c-technology-radar__legend'>
            <Legend
              technologies={ technologies }
              groups={ groups }
              settings={ settings }
              onSelectGroup={ this.handleSelectGroup }/>
          </div>

          <div className='c-technology-radar__technologies'>
            { this.renderTechnologies(technologies, groups, settings) }
          </div>
        </div>
      </div>
    );
  }


  // ----------------------------------------------------------------------------- Event handler methods
  private handleSelectItem = (selected: Technology): void => {
    this.props.applicationState.selectTechnology(selected);
  }

  private handleSelectGroup = (selected: Group): void => {
    this.props.applicationState.selectGroup(selected);
  }

  private handleDeselectGroup = (): void => {
    this.props.applicationState.selectGroup(null);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private calculateTransforms(selectedGroup: Group, groups: Group[]): { transform: string } {
    if (!Boolean(selectedGroup)) {
      return {
        transform: [
          'translate(0, 0)',
          `rotateZ(${ BASE_TRANSFORM_ROTATE_DEGREES }deg)`,
        ].join(' ')
      };
    }

    const index = groups.findIndex(acc => acc.id === selectedGroup.id) - 1;
    const baseAngleRadians = (2 * Math.PI) / groups.length;
    const angleRadians = index * baseAngleRadians + 0.5 * baseAngleRadians;

    const x = Math.cos(angleRadians) * 50;
    const y = Math.sin(angleRadians) * 50;

    return {
      transform: [
        `translate(${ x }%, ${ y }%)`,
        `rotateZ(${ BASE_TRANSFORM_ROTATE_DEGREES }deg)`,
      ].join(' ')
    }
  }

  private renderTechnologies(technologies: Technology[], groups: Group[], settings: TechnologyRadarSettings): ReactNode[] {
    return technologies.map((technology) => {
      return (
        <TechnologyItem
          className='c-technology-radar__item'
          key={ technology.id }
          technology={ technology }
          group={ this.findGroupForTechnology(technology, groups) }
          technologies={ technologies }
          groups={ groups }
          settings={ settings }
          onSelect={ this.handleSelectItem } />
      )
    });
  }

  private findGroupForTechnology(technology: Technology, groups: Group[]): Group {
    return groups.find(group => group.id === technology.groupId);
  }
}
