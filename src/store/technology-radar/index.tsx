
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Component, createContext, Context } from 'react';

import produce from 'immer';

import { consume } from 'utils/store';

import { ApplicationStateContext } from '../application-state';
import { defaultState, defaultTechnology, defaultGroup } from './constants';


// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarStoreProps {
  initialState?: TechnologyRadar;
  applicationState?: ApplicationState & ApplicationStateActions;
}

export const TechnologyRadarContext: Context<TechnologyRadar & TechnologyRadarActions> = createContext({} as any);

// ----------------------------------------------------------------------------- Implementation
// tslint:disable-next-line:class-name
export class TechnologyRadarStoreComponent extends Component<TechnologyRadarStoreProps, TechnologyRadar & TechnologyRadarActions> implements TechnologyRadarActions {

  constructor(props: TechnologyRadarStoreProps) {
    super(props);

    this.state = {
      ...defaultState(),
      ...props.initialState || {},

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
      const newState = defaultState();

      this.props.applicationState.setOwner(true);
      this.props.applicationState.setEditMode(true);

      return newState;
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
}

export const TechnologyRadarStore = consume(ApplicationStateContext, { bindTo: 'applicationState' })(TechnologyRadarStoreComponent);