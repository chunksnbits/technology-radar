
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Component, createContext, Context } from 'react';

import produce from 'immer';

import { consume } from 'utils/store';

import { ApplicationStateContext } from '../application-state';
import { defaultState, defaultTechnology, defaultGroup } from './constants';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProviderProps {
  initialState?: TechnologyRadar;
  applicationState?: ApplicationState & ApplicationStateActions;
}

export const TechnologyRadarContext: Context<TechnologyRadarProvider> = createContext({} as any);

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
export class TechnologyRadarProvider extends Component<TechnologyRadarProviderProps, TechnologyRadarStore> implements TechnologyRadarActions {

  constructor(props: TechnologyRadarProviderProps) {
    super(props);
    const initialState = Object.assign({}, defaultState, props.initialState || {});

    this.state = {
      ...initialState,

      technologies: this.sortTechnologies(initialState.technologies, initialState.groups),

      createNew: this.createNew.bind(this),
      edit: this.edit.bind(this),
      addGroup: this.addGroup.bind(this),
      addTechnology: this.addTechnology.bind(this),
      updateGroup: this.updateGroup.bind(this),
      updateTechnology: this.updateTechnology.bind(this),
      removeGroup: this.removeGroup.bind(this),
      removeTechnology: this.removeTechnology.bind(this),
      clearAll: this.clearAll.bind(this),
    };
  }

  render() {
    return (
      <TechnologyRadarContext.Provider value={ Object.assign({}, this.state, this) }>
        { this.props.children }
      </TechnologyRadarContext.Provider>
    );
  }

  // ----------------------------------------------------------------------------- Action methods
  createNew(): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      draftState.edited = true;

      this.props.applicationState.setOwner(true);
      this.props.applicationState.setEditMode(true);
    }));
  }

  edit(): void {
    this.props.applicationState.setEditMode(true);
  }

  addGroup(): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      const group = defaultGroup(draftState.groups.length);

      draftState.groups.push(group);
      draftState.edited = true;

      this.props.applicationState.selectGroup(group);

      return draftState;
    }));
  }

  addTechnology(group: Group): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      const technology = defaultTechnology(group);

      draftState.technologies.push(technology);
      draftState.technologies = this.sortTechnologies(draftState.technologies, draftState.groups);

      draftState.edited = true;

      this.props.applicationState.selectTechnology(technology);

      return draftState;
    }));
  }

  updateGroup(group: Group, key: string, value: any): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      draftState.groups = draftState.groups.map(acc => {
        return group.id === acc.id ? { ...group, [key]: value } : acc
      });

      draftState.edited = true;

      return draftState;
    }));
  }

  updateTechnology(technology: Technology, key: string, value: any): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      draftState.technologies = draftState.technologies.map(acc => {
        return technology.id === acc.id ? { ...technology, [key]: value } : acc
      });

      draftState.technologies = this.sortTechnologies(draftState.technologies, draftState.groups);
      draftState.edited = true;

      return draftState;
    }));
  }

  removeGroup(group: Group): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      draftState.groups = draftState.groups.filter((acc) => acc.id !== group.id);
      draftState.technologies = draftState.technologies.filter((acc) => acc.groupId !== group.id);

      return draftState;
    }));
  }

  removeTechnology(technology: Technology): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      draftState.technologies = draftState.technologies.filter((acc) => acc.id !== technology.id);
      draftState.technologies = this.sortTechnologies(draftState.technologies, draftState.groups);

      return draftState;
    }));
  }

  clearAll(): void {
    this.setState(state => produce(state, (draftState: TechnologyRadar) => {
      draftState.technologies = [];
      draftState.groups = [];
      draftState.edited = true;

      return draftState;
    }));
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private sortTechnologies(technologies: Technology[], groups: Group[]): Technology[] {
    return technologies.sort((technology, other) => {
      if (technology.groupId !== other.groupId) {
        return this.groupIndex(groups, technology) - this.groupIndex(groups, other);
      }

      if (technology.level !== other.level) {
        return technology.level - other.level;
      }

      return technology.id > other.id ? -1 : 1;
    })
  }

  private groupIndex(groups: Group[], technology: Technology): number {
    return groups.findIndex(acc => acc.id === technology.groupId);
  }
}
