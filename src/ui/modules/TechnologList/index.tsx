
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { classNames } from 'core/utils/dom';
import { consume } from 'core/utils/store/consume';

import { ApplicationStateContext, TechnologyRadarContext } from 'core/store';

import './styles.scss';
import { TechnologyListEntry } from './components/TechnologyListEntry';
import { TechnologyListGroup } from './components/TechnologyListGroup';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListProps {
  className?: string;
  technologies?: Technology[];
  groups?: Group[];
  breakpoint?: Breakpoint;
  focusedTechnology?: Technology;
  selectedTechnology?: Technology;
  selectedGroup?: Group;
  viewMode?: ViewMode;

  selectTechnology?: (technology: Technology) => void;
  focusTechnology?: (technology: Technology) => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(TechnologyRadarContext, { select: ['technologies', 'groups'] })
@consume(ApplicationStateContext, {
  select: [
    'breakpoint',
    'focusedTechnology',
    'selectedTechnology',
    'selectedGroup',
    'selectTechnology',
    'focusTechnology',
    'viewMode'
  ]
})
export class TechnologyList extends PureComponent<TechnologyListProps> {
  handlers: BoundHandlers<() => void> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render(): JSX.Element {
    const { breakpoint, focusedTechnology, selectedGroup, selectedTechnology, viewMode, technologies, groups } = this.props;

    const active = Boolean(selectedGroup) || Boolean(selectedTechnology);
    const listView = (breakpoint === 'large' || viewMode === 'list')

    const modifiers = [
      !listView && 'c-technology-list--hidden',
      active && 'c-technology-list--hidden'
    ];

    const focusable = breakpoint === 'large' && active;
    const grouped = Object.entries(this.groupTechnologies(technologies, groups, selectedGroup));

    return (
      <div className={ classNames('c-technology-list', this.props.className, ...modifiers) }>
        <ul className='c-technology-list__items'>{
          grouped.map(([groupId, groupedTechnologies]) => (
            <TechnologyListGroup key={ groupId }>{
              groupedTechnologies.reverse().map(technology => (
                <TechnologyListEntry
                  className={ this.isHidden(groupId, selectedGroup) && 'c-technology-list__item--hidden' }
                  key={ technology.id }
                  focusable={ focusable }
                  technology={ technology }
                  group={ groups.find(acc => acc.id === groupId) }
                  onMouseOver={ this.bindFocusTechnologyHandler(technology) }
                  onMouseOut={ this.bindUnfocusTechnologyHandler(technology) }
                  onClick={ this.bindSelectTechnologyHandler(technology) }
                  focused={ Boolean(focusedTechnology) && focusedTechnology === technology } />
              ))
            }</TechnologyListGroup>
          ))
        }</ul>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private bindSelectTechnologyHandler(technology: Technology): () => void {
    const key = `select-technology-${technology.id}`;

    if (!this.handlers[key]) {
      this.handlers[key] = () => this.props.selectTechnology(technology);
    }

    return this.handlers[key];
  }

  private bindFocusTechnologyHandler(technology: Technology): () => void {
    const key = `set-focused-technology-${technology.id}`;

    if (!this.handlers[key]) {
      this.handlers[key] = () => this.props.focusTechnology(technology);
    }

    return this.handlers[key];
  }

  private bindUnfocusTechnologyHandler(technology: Technology): () => void {
    const key = `unset-focused-technology-${technology.id}`;

    if (!this.handlers[key]) {
      this.handlers[key] = () => this.props.focusTechnology(null);
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