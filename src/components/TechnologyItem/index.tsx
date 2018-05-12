
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
    const { technology, technologies, groups, group } = props;

    const maxLevel = this.getMaxLevel(technologies);
    const groupIndex = groups.findIndex(acc => acc.id === group.id);

    const offset = 12.5;
    const range = 50;
    const level = maxLevel - technology.level;
    const [count, index] = this.positionInGroup(technologies, technology);
    const baseAngle = 90 / count;

    const rotation = 90 + groupIndex * 90 + (index * baseAngle) + 0.5 * baseAngle;
    const variation = this.calculateVariation(index, count, level === 0);
    const translation = (level / maxLevel) * range + offset + variation;

    return {
      transform: [
        `rotate(${rotation}deg)`
      ].join(' '),
      width: `${translation}%`,
    };
  }

  private positionInGroup(technologies: Technology[], technology: Technology): [number, number] {
    const grouped = technologies.filter(acc => acc.groupId === technology.groupId && acc.level === technology.level);
    const index = grouped.findIndex(acc => acc.id === technology.id);

    return [grouped.length, index];
  }

  private calculateVariation(index: number, count: number, maxLevel: boolean): number {
    if (count === 1) {
      return 0;
    }

    const variation = ((2 - index % 3) - 1) * 3.25;

    return variation;
  }

  private getMaxLevel(technologies: Technology[]): number {
    return technologies.reduce((result, technology) => Math.max(result, technology.level), 0);
  }
}
