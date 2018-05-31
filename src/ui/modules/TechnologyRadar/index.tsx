
// ----------------------------------------------------------------------------- Dependencies
import { Component, CSSProperties } from 'react';
import * as React from 'react';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { consume, compose } from 'utils/store';
import { classNames } from 'utils/dom';

import { TechnologyItem } from './components/TechnologyItem';
import { Legend } from './components/Legend';

import './styles.scss';
import { degreesToRadians, randomNumber } from 'utils/math';
import { calculateMaxLevel } from './components/utils/math/max-level';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  applicationState?: ApplicationStateStore;
  technologyRadar?: TechnologyRadarStore;
}

const BASE_TRANSFORM_ROTATE_DEGREES = -10;

// ----------------------------------------------------------------------------- Implementation
export class TechnologyRadarComponent extends Component<TechnologyRadarProps> {
  private handlers: BoundHandlers = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentDidUpdate() {
    const { selectedGroup } = this.props.applicationState;

    if (Boolean(selectedGroup)) {
      return document.body.addEventListener('click', this.handleDeselectGroup);
    }

    document.body.removeEventListener('click', this.handleDeselectGroup);  }

  render() {
    const { selectedGroup, selectedTechnology, selectTechnology, selectGroup } = this.props.applicationState;
    const { groups, technologies, settings } = this.props.technologyRadar;

    return (
      <div className={ classNames('c-technology-radar', this.props.className) }
        style={ this.calculateTransforms(selectedTechnology, selectedGroup, groups) }>
        <div className='c-technology-radar__content'>
          <div className='c-technology-radar__legend'>
            <Legend
              technologies={ technologies }
              groups={ groups }
              settings={ settings }
              onSelectGroup={ selectGroup }/>
          </div>

          <div className='c-technology-radar__technologies'>{
            technologies.map((technology) =>
              <TechnologyItem
                key={ technology.id  }
                className='c-technology-radar__item'
                technology={ technology }
                selectedTechnology={ selectedTechnology }
                group={ this.findGroupForTechnology(technology, groups) }
                technologies={ technologies }
                groups={ groups }
                settings={ settings }
                onSelect={ this.bindSelectItem(selectTechnology) } />
          )}</div>
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
  private calculateTransforms(selectedTechnology: Technology, selectedGroup: Group, groups: Group[]): CSSProperties{
    if (Boolean(selectedTechnology)) {
      return this.focusTechnology(selectedTechnology, groups);
    }
    if (Boolean(selectedGroup)) {
      return this.focusOnGroup(selectedGroup, groups);
    }

    return {
      transform: [
        'translate(0, 0)',
        `rotateZ(${ BASE_TRANSFORM_ROTATE_DEGREES }deg)`,
      ].join(' ')
    };
  }

  private focusTechnology(selectedTechnology: Technology, groups: Group[]): CSSProperties{
    const { innerRadiusPercent, outerRadiusPercent } = this.props.technologyRadar.settings;

    const index = groups.findIndex(acc => acc.id === selectedTechnology.groupId) - 1;
    const baseAngleRadians = 360 / groups.length;
    const angleRadians = degreesToRadians(index * baseAngleRadians);
    const maxLevel = calculateMaxLevel(this.props.technologyRadar.technologies);
    const level = selectedTechnology.level / maxLevel;
    const offsetPercent = innerRadiusPercent / 50 * 100;
    const levelPercent = offsetPercent + outerRadiusPercent - level * outerRadiusPercent;

    const x = Math.cos(angleRadians) * levelPercent;
    const y = Math.sin(angleRadians) * levelPercent;

    return {
      transform: [
        'scale(4.5)',
        `rotateZ(${ randomNumber(0, -2) * BASE_TRANSFORM_ROTATE_DEGREES }deg)`,
        `translate(${ x }%, ${ y }%)`,
      ].join(' '),
      transformOrigin: `${ x }%, ${ y }%`
    }
  }

  private focusOnGroup(selectedGroup: Group, groups: Group[]): CSSProperties{
    const index = groups.findIndex(acc => acc.id === selectedGroup.id) - 1;
    const baseAngleRadians = 360 / groups.length;
    const angleRadians = degreesToRadians(index * baseAngleRadians);

    const x = Math.cos(angleRadians) * 66;
    const y = Math.sin(angleRadians) * 66;

    return {
      transform: [
        `translate(${ x }%, ${ y }%)`,
        // `rotateZ(${ BASE_TRANSFORM_ROTATE_DEGREES }deg)`,
        'scale(2.5)'
      ].join(' '),
      transformOrigin: `${ x }%, ${ y }%`
    }
  }

  private findGroupForTechnology(technology: Technology, groups: Group[]): Group {
    return groups.find(group => group.id === technology.groupId);
  }
}

export const TechnologyRadar = compose(
  consume(ApplicationStateContext, { bindTo: 'applicationState' }),
  consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
)(TechnologyRadarComponent);
