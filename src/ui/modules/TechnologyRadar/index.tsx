
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, CSSProperties, RefObject, createRef } from 'react';
import * as React from 'react';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

import { TechnologyItem } from './components/TechnologyItem';

import './styles.scss';
import { calculateTechnologyRotationDegrees, calculateItemOffsetPercent, calculateGroupRotationDegrees } from './components/utils/math';
import { LegendGroupLabels } from './components/LegendGroupLabels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';
import { LegendLevels } from './components/LegendLevels';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  groups?: Group[];
  levels?: Level[];
  technologies?: Technology[];
  settings?: TechnologyRadarSettings;
  focusedTechnology?: Technology;
  selectedTechnology?: Technology;
  selectedGroup?: Group;
  selectGroup?: (group: Group) => void;
  focusTechnology?: (technology: Technology) => void;
  selectTechnology?: (technology: Technology) => void;
}

const BASE_TRANSFORM_ROTATE_DEGREES = -10;

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, {
  select: [
    'focusedTechnology',
    'selectedTechnology',
    'selectedGroup',
    'selectGroup',
    'focusTechnology',
    'selectTechnology'
  ]
})
@consume(TechnologyRadarContext, { select: ['groups', 'levels', 'technologies', 'settings'] })
export class TechnologyRadar extends PureComponent<TechnologyRadarProps> {
  elementRef: RefObject<HTMLDivElement>;

  constructor(props: TechnologyRadarProps) {
    super(props);
    this.elementRef = createRef();
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  /**
   * Adds performance optimization for render intensive tasks.
   */
  componentWillUpdate() {
    this.elementRef.current.classList.add('c-technology-radar--will-change');
  }

  componentDidUpdate() {
    this.elementRef.current.classList.remove('c-technology-radar--will-change');
  }

  render() {
    const { groups, levels, technologies, settings } = this.props;
    const { focusedTechnology, selectedTechnology, selectedGroup } = this.props;

    const modifiers = [
      Boolean(selectedTechnology) && 'c-technology-radar--selected-technology',
      Boolean(selectedGroup) && 'c-technology-radar--selected-group',
    ];

    const transforms = this.calculateFocusTransforms();

    return (
      <div className={ classNames('c-technology-radar', this.props.className, ...modifiers) }
        style={ transforms }
        onClick={ this.deselectHandler }
        ref={ this.elementRef }>
        <div className='c-technology-radar__content'>
          <div className='c-technology-radar__legend'>
            <LegendGroupLabels
              groups={ groups }
              onSelect={ this.selectGroupHandler } />

            <LegendGroupSeparators
              groups={ groups } />

            <LegendLevels
              technologies={ technologies }
              innerRadiusPercent={ settings.innerRadiusPercent }
              outerRadiusPercent={ settings.outerRadiusPercent }
              levels={ levels } />
          </div>

          <div className='c-technology-radar__technologies'>{
            technologies.map((technology) => (
              <TechnologyItem
                key={ technology.id  }
                className='c-technology-radar__item'
                technology={ technology }
                focused={ Boolean(focusedTechnology) && focusedTechnology.id === technology.id }
                selected={ Boolean(selectedTechnology) && selectedTechnology === technology }
                onSelect={ this.selectTechnologyHandler }
                onMouseOver={ this.focusTechnologyHandler }
                onMouseOut={ this.unfocusTechnologyHandler }
                { ...this.props } />
          ))}</div>
        </div>
      </div>
    );
  }


  // ----------------------------------------------------------------------------- Event handler methods
  private deselectHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.selectGroup(null);
    this.props.selectTechnology(null);
  }

  private selectGroupHandler = (group: Group, event: React.MouseEvent<SVGTextElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.selectGroup(group);
    this.props.selectTechnology(null);

    event.preventDefault();
  }

  private selectTechnologyHandler = (technology: Technology, event: React.MouseEvent<HTMLElement>): void => {
    this.props.selectTechnology(technology);

    event.preventDefault();
  }

  private focusTechnologyHandler = (technology: Technology, event: React.MouseEvent<HTMLElement>): void => {
    this.props.focusTechnology(technology);

    event.preventDefault();
  }

  private unfocusTechnologyHandler = (_, event: React.MouseEvent<HTMLElement>): void => {
    this.props.focusTechnology(null);

    event.preventDefault();
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private calculateFocusTransforms(): CSSProperties{
    const { selectedTechnology, selectedGroup } = this.props;

    if (Boolean(selectedTechnology)) {
      return this.calculateFocusedTranfsformForSelectedTechnology();
    }
    if (Boolean(selectedGroup)) {
      return this.calculateFocusedTranfsformForSelectedGroup();
    }

    return {
      transform: [
        'scale3d(1, 1, 1)',
        'translate3d(0, 0, 0)',
        `rotate3d(0, 0, 1, ${ BASE_TRANSFORM_ROTATE_DEGREES }deg)`,
      ].join(' ')
    };
  }

  private calculateFocusedTranfsformForSelectedTechnology(): CSSProperties{
    const { selectedTechnology, groups, technologies, settings } = this.props;

    const itemRotationDegrees = calculateTechnologyRotationDegrees(selectedTechnology, groups, technologies);
    const itemOffsetPercent = calculateItemOffsetPercent(selectedTechnology, technologies, settings);

    const rotationDegrees = 180 + 360 - itemRotationDegrees;

    return {
      transform: [
        'scale3d(4.5, 4.5, 1)',
        `rotate3d(0, 0, 1, ${ -1 * rotationDegrees }deg)`,
        `translate3d(${ itemOffsetPercent * 0.9 }%, 0, 0)`,
        `rotate3d(0, 0, 1, ${ rotationDegrees }deg)`,
      ].join(' ')
    }
  }

  private calculateFocusedTranfsformForSelectedGroup(): CSSProperties{
    const { selectedGroup, groups } = this.props;

    const groupBaseRotationDegrees = 360 / groups.length;
    const groupRotationDegrees = calculateGroupRotationDegrees(selectedGroup, groups);

    const rotationDegrees = 180 - (groupRotationDegrees + 0.5 * groupBaseRotationDegrees);

    return {
      transform: [
        'scale3d(2, 2, 1)',
        `rotate3d(0, 0, 1, ${ -1 * rotationDegrees }deg)`,
        `translate3d(25%, 0, 0)`,
        `rotate3d(0, 0, 1, ${ rotationDegrees }deg)`,
      ].join(' ')
    }
  }
}
