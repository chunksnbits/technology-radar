
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
  onSelect: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyItem extends Component<TechnologyItemProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];
    const { group } = this.props;

    return (
      <div
        className={ classNames('c-technology-item', this.props.className, ...modifiers) }
        style={ this.calculateTransforms(this.props) }>

        <button
          className='c-technology-item__item'
          onClick={ this.propagateOnSelect }
          style={{
            borderColor: group.color
          }
        } />
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  propagateOnSelect = () => {
    this.props.onSelect(this.props.technology)
  };

  // ----------------------------------------------------------------------------- Helpers methods
  private calculateTransforms(props: TechnologyItemProps): { transform: string, width: string} {
    const { technology, technologies, groups, group, settings } = props;
    const { innerRadiusPercent, outerRadiusPercent } = settings;

    // The index of the item's group within the dataset's groups
    const groupIndex = groups.findIndex(acc => {
      return acc.id === group.id;
    });

    // Calculate number of items and the current item's index only in relation
    // to their current group and level (i.e., disregard other item's within that group / level).
    const count = this.calculateNumberOfItemsForLevelAndGroup(technologies, technology);
    const index = this.calculateIndexForLevelAndGroup(technologies, technology);

    // The highest level set in the dataset
    const maxLevel = this.getMaxLevel(technologies);

    const rotationDegrees = this.calculateItemRotationDegrees({
      groupIndex,
      groupSize: groups.length,
      count,
      index
    });

    const translationPercent = this.calculateItemTranslationPercent({
      index,
      count,
      level: technology.level,
      maxLevel,
      innerRadiusPercent,
      outerRadiusPercent
    });

    return {
      transform: `rotateZ(${ rotationDegrees }deg)`,
      width: `${ translationPercent }%`,
    };
  }

  private calculateItemRotationDegrees(rotationProperties: ItemRotationProperties): number {
    const { groupIndex, groupSize, count, index } = rotationProperties;
    // Rotate item to it's group
    //
    // Angle for each group segment in the dataset.
    const groupBaseAngleDegree = 360 / groupSize;
    // Angle for each item in the item's level range within that group.
    const itemBaseAngleDegree = groupBaseAngleDegree / (count + 1);
    // Rotate to fit item into parent group.
    const groupRotationDegree = groupIndex * groupBaseAngleDegree;
    // Rotate item within group
    const itemRotationDegree = index * itemBaseAngleDegree + 0.5 * itemBaseAngleDegree;
    //
    // Final rotation
    //
    return (groupRotationDegree + itemRotationDegree + 0.5 * itemBaseAngleDegree) % 360;
  }

  private calculateItemTranslationPercent(transformProperties: ItemTransformProperties): number {
    const { index, count, level, maxLevel, innerRadiusPercent, outerRadiusPercent } = transformProperties;

    // Invert level, i.e., the greater the level the nearer the item is to the center
    const invertedLevel = (maxLevel + 1) - level;

    // Translate item to it's level
    //
    // Calculate base translation for each level between inner and outer radius
    const levelBaseTranslationPercent = (outerRadiusPercent - innerRadiusPercent) / maxLevel;
    // Add base shift to current item's level
    const levelShiftPercent = (invertedLevel - 1) * levelBaseTranslationPercent;
    // Add shift item to current item's level center
    const centerShiftPercent = 0.5 * levelBaseTranslationPercent;
    // Add some variation with alternating between [-1, 1] to keep items from overlapping
    const variation = count < 2 ? 0 : (index % 2 === 0 ? 1 : -1);
    const translationVariationPercent = variation * 0.25 * centerShiftPercent;

    //
    // Final translation
    //
    return innerRadiusPercent + levelShiftPercent + centerShiftPercent + translationVariationPercent;
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
