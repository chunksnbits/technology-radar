
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';
import { consume } from 'utils/store/consume';

import { Button } from '@material-ui/core';
import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListProps {
  className?: string;
  technologyRadar?: TechnologyRadarStore;
  applicationState?: ApplicationStateStore;
}

// ----------------------------------------------------------------------------- Implementation
@consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
export class TechnologyList extends Component<TechnologyListProps> {
  handlers: BoundHandlers<() => void> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render(): JSX.Element {

    const modifiers = [

    ];

    const { technologies, groups } = this.props.technologyRadar;
    const { selectedGroup } = this.props.applicationState;

    const grouped = this.groupTechnologies(technologies, groups, selectedGroup);

    return (
      <div className={ classNames('c-technology-list', this.props.className, ...modifiers) }>
        <ul className='c-technology-list__items'>{
          this.renderGroups(grouped, groups)
        }</ul>
      </div>
    );
  }

  private renderGroups(grouped: GroupedTechnologies, groups: Group[]): JSX.Element[] {
    return Object.entries(grouped).map(([groupId, technologies]) => {
      const group = groups.find(acc => acc.id === groupId);

      return (
        <li className='c-technology-list__group' key={ groupId }>
          <ul className='c-technology-list__group-items'>
            {
              this.renderTechnologies(technologies, group)
            }
          </ul>
        </li>
      );
    });
  }

  private renderTechnologies(technologies: Technology[], group: Group): JSX.Element[] {
    return technologies.map(technology => (
      <li key={ technology.id } className='c-technology-list__item'>
        <Button role='flat' fullWidth={ true } onClick={ this.bindSelectTechnology(technology) }>
          <span
            className='c-technology-list__group-indicator'
            style={{
              borderColor: group.color
            }} />
          <span className='c-technology-list__item-action'>
            { technology.name }
          </span>
        </Button>
      </li>
    ));
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private bindSelectTechnology(technology: Technology): () => void {
    const key = `select-technology-${technology.id}`;

    if (!this.handlers[key]) {
      this.handlers[key] = () => this.props.applicationState.selectTechnology(technology);
    }

    return this.handlers[key];
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private groupTechnologies(technologies: Technology[], groups: Group[], selectedGroup: Group): { [key:string]: Technology[] } {
    return groups.reduce((result, group) => {
      return {
        ...result,
        [group.id]: technologies.filter(technology => technology.groupId === group.id)
      };
    }, {});
  }
}