
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyItemProps {
  className?: string;
  maxLevel: number;
  technology: Technology;
  technologies: Technology[];
  group: Group;
  onSelect: (technology: Technology) => any;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyItem extends Component<TechnologyItemProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {

    const modifiers = [

    ];

    const { technology, technologies, maxLevel } = this.props;

    const offset = 12.5;
    const range = 50;
    const level = maxLevel - technology.level;
    const [count, index] = this.positionInGroup(technologies, technology);
    const baseAngle = 90 / count;
    const rotation = 90 + technology.group * 90 + (index * baseAngle) + 0.5 * baseAngle;
    const variation = this.calculateVariation(index, count, level === 0);
    const translation = (level / maxLevel) * range + offset + variation;

    return (
        <div
          key={ technology.id }
          className={ classNames('c-technology-item', this.props.className, ...modifiers) }
          style={{
            transform: [
              `rotate(${rotation}deg)`
            ].join(' '),
            width: `${translation}%`,
          }}>
          <button className='c-technology-item__item'
            style={{
              transform: [
                `rotate(${-1 * rotation}deg)`
              ].join(' ')
            }}
            onClick={ () => this.props.onSelect(technology) }>
            <span className='c-technology-item__label'>
              { /** technology.name */ }
            </span>
          </button>
        </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private positionInGroup(technologies: Technology[], technology: Technology): [number, number] {
    const grouped = technologies.filter(acc => acc.group === technology.group && acc.level === technology.level);
    const index = grouped.findIndex(acc => acc.id === technology.id);

    return [grouped.length, index];
  }

  private calculateVariation(index: number, count: number, maxLevel: boolean): number {
    if (count === 1) {
      return 0;
    }

    const variation = ((2 - index % 3) - 1) * 3.25;

    window.console.log('+++ variation', 3 - index, 2 - index % 3, variation);

    return variation;
  }
}
