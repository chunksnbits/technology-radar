
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyItemProps {
  className?: string;
  technology: Technology;
  group: Group;
  technologies: Technology[];
  groups: Group[];
  settings: TechnologyRadarSettings;
  onSelect: (technology: Technology) => any;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyItem extends Component<TechnologyItemProps> {

  propagateClick = () => {
    this.props.onSelect(this.props.technology)
  };

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];
    const { group } = this.props;

    return (
      <div
        key={ this.props.technology.id }
        className={ classNames('c-technology-item', this.props.className, ...modifiers) }
        style={ this.calculateTransforms(this.props) }>

        <button
          className='c-technology-item__item'
          onClick={ this.propagateClick }
          style={{
            borderColor: group.color
          }
        } />
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private calculateTransforms(props: TechnologyItemProps): { transform: string, width: string} {
    const { technology, technologies, groups, group, settings } = props;

    const maxLevel = this.getMaxLevel(technologies);
    const groupIndex = groups.findIndex(acc => acc.id === group.id);

    const radiusPercent = settings.outerRadiusPercent;

    const level = (maxLevel + 1) - technology.level;

    const index = this.calculateIndexForLevelAndGroup(technologies, technology);
    const count = this.calculateNumberOfItemsForLevelAndGroup(technologies, technology);

    // Angle for each group segment in the dataset.
    const groupBaseAngleDegree = 360 / groups.length;
    // Angle for each item in the item's level range within that group.
    const itemBaseAngleDegree = groupBaseAngleDegree / (count + 1);
    // Rotate to fit item into parent group.
    const groupRotationDegree = groupBaseAngleDegree + groupIndex * groupBaseAngleDegree;
    // Rotate item within group
    const itemRotationDegree = index * itemBaseAngleDegree + 0.5 * itemBaseAngleDegree;
    // Final rotation calculated by adding total rotation base on item-group
    // and item rotation within group.
    const rotationDegree = groupRotationDegree + itemRotationDegree + 0.5 * itemBaseAngleDegree;

    console.log('+++ count', count);

    // Adds shift in translation to prevent overlap between neighbouring items.
    const levelRangeRatio = 1 / maxLevel;
    // Shift to middle of current level
    const offsetPercent = settings.innerRadiusPercent + levelRangeRatio * 0.5 * radiusPercent;
    // Calculate base translation for each level
    const levelBaseTranslationPercent = levelRangeRatio * (settings.outerRadiusPercent - settings.innerRadiusPercent);
    // Add some variation with alternating between -1, 0, 1 to keep items from overlapping
    const variation = count < 2 ? 0 : (index % 2 === 0 ? 1 : -1);
    const translationVariationPercent = variation * 0.25 * offsetPercent;

  console.log('+++ o', level, levelBaseTranslationPercent, settings.innerRadiusPercent);

    const translationPercent = settings.innerRadiusPercent + (level - 1) * levelBaseTranslationPercent + 0.5 * levelBaseTranslationPercent + translationVariationPercent;

    return {
      transform: [
        `rotate(${rotationDegree}deg)`
      ].join(' '),
      width: `${translationPercent}%`,
    };
  }

  private calculateNumberOfItemsForLevelAndGroup(technologies: Technology[], technology: Technology): number {
    return technologies.filter(acc => acc.groupId === technology.groupId && acc.level === technology.level).length;
  }

  private calculateIndexForLevelAndGroup(technologies: Technology[], technology: Technology): number  {
    const grouped = technologies.filter(acc => acc.groupId === technology.groupId && acc.level === technology.level);
    return grouped.findIndex(acc => acc.id === technology.id);
  }

  private getMaxLevel(technologies: Technology[]): number {
    return technologies.reduce((result, technology) => Math.max(result, technology.level), 0);
  }
}
