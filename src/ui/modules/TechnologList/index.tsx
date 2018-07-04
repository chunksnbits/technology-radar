
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { classNames, consume, styled } from 'core/utils';
import { LayoutProviderContext } from 'core/ui/components';
import { ApplicationStateContext, TechnologyRadarContext } from 'core/store';

import { TechnologyListEntry } from './components/TechnologyListEntry';
import { TechnologyListGroup } from './components/TechnologyListGroup';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListProps {
  className?: string;
  classes?: Classes;
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
@consume(LayoutProviderContext, { bindTo: 'breakpoint' })
@consume(TechnologyRadarContext, { select: ['technologies', 'groups'] })
@consume(ApplicationStateContext, {
  select: [
    'focusedTechnology',
    'selectedTechnology',
    'selectedGroup',
    'selectTechnology',
    'focusTechnology',
    'viewMode',
  ],
})
@styled(styles)
export class TechnologyList extends PureComponent<TechnologyListProps> {
  handlers: BoundHandlers<() => void> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render(): JSX.Element {
    const {
      breakpoint,
      focusedTechnology,
      selectedGroup,
      selectedTechnology,
      viewMode,
      technologies,
      groups,
      classes,
    } = this.props;

    const active = Boolean(selectedGroup) || Boolean(selectedTechnology);
    const listView = (breakpoint === 'large' || viewMode === 'list')

    const modifiers = [
      !listView && classes.technologyListHidden,
      active && classes.technologyListHidden,
    ];

    const focusable = breakpoint === 'large' && !active;
    const grouped = Object.entries(this.groupTechnologies(technologies, groups, selectedGroup));

    return (
      <div className={ classNames(classes.root, this.props.className, ...modifiers) }>
        <ul className={ classes.technologyListItems }>{
          grouped.map(([groupId, groupedTechnologies]) => (
            <TechnologyListGroup key={ groupId }>{
              groupedTechnologies.reverse().map(technology => (
                <TechnologyListEntry
                  className={ this.isHidden(groupId, selectedGroup) && classes.technologyListItemHidden }
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
        [group.id]: technologies.filter(technology => technology.groupId === group.id),
      };
    }, {});
  }

  private isHidden(groupId: string, selectedGroup: Group): boolean {
    return Boolean(selectedGroup) && selectedGroup.id !== groupId;
  }
}