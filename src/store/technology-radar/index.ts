
// ----------------------------------------------------------------------------- Dependencies
import { createContext } from 'react';
import { observable, action, set } from 'mobx';
import { applyInitialData } from 'utils/store';
import { defaultTechnology, defaultGroup } from './constants';

// ----------------------------------------------------------------------------- Implementation
export class TechnologyRadarImpl implements TechnologyRadar {

  @observable
  edited: boolean = false;

  @observable
  technologies: Technology[] = [];

  @observable
  groups: Group[] = [];

  @observable
  settings: TechnologyRadarSettings = {
    innerRadiusPercent: 0,
    outerRadiusPercent: 50
  };

  constructor(initialState: any = {}) {
    applyInitialData(this, initialState);
  }

  // ----------------------------------------------------------------------------- Action methods
  @action.bound
  addGroup(): void {
    this.groups.push(defaultGroup(this.groups.length));
    this.edited = true;
  }

  @action.bound
  addTechnology(group: Group): void {
    this.technologies.push(defaultTechnology(group));
    this.edited = true;
  }

  @action.bound
  updateGroup(group: Group, key: string, value: any): void {
    set(group, key, value)
    this.edited = true;
  }

  @action.bound
  updateTechnology(technology: Technology, key: string, value: any): void {
    set(technology, key, value);
    this.edited = true;
  }

  @action.bound
  removeGroup(group: Group): void {
    this.groups = this.groups.filter((acc) => acc.id !== group.id);
  }

  @action.bound
  removeTechnology(technology: Technology): void {
    this.technologies = this.technologies.filter((acc) => acc.id !== technology.id);
  }

  @action.bound
  clearAll(): void {
    this.technologies = [];
    this.groups = [];
    this.edited = true;
  }
}

export const TechnologyRadarState = createContext(new TechnologyRadarImpl());
