
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';
import { consume } from 'utils/store/consume';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import './styles.scss';
import { TechnologyListEntry } from './components/TechnologyListEntry';
import { TechnologyListGroup } from './components/TechnologyListGroup';

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

    const { technologies, groups, } = this.props.technologyRadar;
    const { breakpoint, focusedTechnology, selectedGroup, selectedTechnology } = this.props.applicationState;

    const focusable = breakpoint === 'large' && !Boolean(selectedGroup) && !Boolean(selectedTechnology);
    const grouped = Object.entries(this.groupTechnologies(technologies, groups, selectedGroup));

    return (
      <div className={ classNames('c-technology-list', this.props.className, ...modifiers) }>
        <ul className='c-technology-list__items'>{
          grouped.map(([groupId, groupedTechnologies]) => (
            <TechnologyListGroup key={ groupId }>{
              groupedTechnologies.map(technology => (
                <TechnologyListEntry
                  className={ this.isHidden(groupId, selectedGroup) && 'c-technology-list__item--hidden' }
                  key={ technology.id }
                  focusable={ focusable }
                  technology={ technology }
                  group={ groups.find(acc => acc.id === groupId) }
                  onMouseOver={ this.bindFocusTechnology(technology) }
                  onMouseOut={ this.bindUnfocusTechnology(technology) }
                  onClick={ this.bindSelectTechnology(technology) }
                  focused={ Boolean(focusedTechnology) && focusedTechnology === technology } />
              ))
            }</TechnologyListGroup>
          ))
        }</ul>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private bindSelectTechnology(technology: Technology): () => void {
    const key = `select-technology-${technology.id}`;

    if (!this.handlers[key]) {
      this.handlers[key] = () => this.props.applicationState.selectTechnology(technology);
    }

    return this.handlers[key];
  }

  private bindFocusTechnology(technology: Technology): () => void {
    const key = `set-focused-technology-${technology.id}`;

    if (!this.handlers[key]) {
      this.handlers[key] = () => this.props.applicationState.focusTechnology(technology);
    }

    return this.handlers[key];
  }

  private bindUnfocusTechnology(technology: Technology): () => void {
    const key = `unset-focused-technology-${technology.id}`;

    if (!this.handlers[key]) {
      this.handlers[key] = () => this.props.applicationState.focusTechnology(null);
    }

    return this.handlers[key];
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private groupTechnologies(technologies: Technology[], groups: Group[], selectedGroup: Group): GroupedTechnologies {
    return groups.reduce((result, group) => {
      return {
        ...result,
        [group.id]: technologies.filter(technology => technology.groupId === group.id)
      };
    }, {});
  }

  private isHidden(groupId: string, selectedGroup: Group): boolean {
    return Boolean(selectedGroup) && selectedGroup.id !== groupId;
  }
}