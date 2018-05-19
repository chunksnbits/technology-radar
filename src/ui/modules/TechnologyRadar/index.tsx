
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { classNames } from 'utils/dom';

import { ApplicationState, consume } from 'store';

import { Iterator } from 'ui/components/Iterator';

import { TechnologyItem } from './components/TechnologyItem';
import { Legend } from './components/Legend';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  applicationState?: ApplicationState;
}

const BASE_TRANSFORM_ROTATE_DEGREES = -10;

// ----------------------------------------------------------------------------- Implementation
@observer
@consume(ApplicationState, { bindTo: 'applicationState' })
export class TechnologyRadar extends Component<TechnologyRadarProps> {
  private handlers: BoundHandlers = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentDidUpdate() {
    const { selectedGroup } = this.props.applicationState;

    if (Boolean(selectedGroup)) {
      return document.body.addEventListener('click', this.handleDeselectGroup);
    }

    document.body.removeEventListener('click', this.handleDeselectGroup);  }

  render() {
    const { selectedGroup, selectTechnology, selectGroup,technologyRadar } = this.props.applicationState;
    const { groups, technologies, settings } = technologyRadar;

    return (
      <div className={ classNames('c-technology-radar', this.props.className) }
        style={ this.calculateTransforms(selectedGroup, groups) }>
        <div className='c-technology-radar__content'>
          <div className='c-technology-radar__legend'>
            <Legend
              technologies={ technologies }
              groups={ groups }
              settings={ settings }
              onSelectGroup={ selectGroup }/>
          </div>

          <div className='c-technology-radar__technologies'>
            <Iterator collection={ technologies }>{ (technology: Technology) =>
              <TechnologyItem
                className='c-technology-radar__item'
                key={ technology.id }
                technology={ technology }
                group={ this.findGroupForTechnology(technology, groups) }
                technologies={ technologies }
                groups={ groups }
                settings={ settings }
                onSelect={ this.bindSelectItem(selectTechnology) } />
            }</Iterator>
          </div>
        </div>
      </div>
    );
  }


  // ----------------------------------------------------------------------------- Event handler methods
  private handleDeselectGroup = () => {
    this.props.applicationState.selectGroup(null);
  }

  private bindSelectItem(selectTechnology: Function): Function {
    if (!this.handlers.selectItem) {
      this.handlers.selectItem = (selected: Technology): void => {
        selectTechnology(selected);
      }
    }

    return this.handlers.selectItem;
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

  private findGroupForTechnology(technology: Technology, groups: Group[]): Group {
    return groups.find(group => group.id === technology.groupId);
  }
}
