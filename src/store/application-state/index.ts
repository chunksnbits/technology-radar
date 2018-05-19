
// ----------------------------------------------------------------------------- Dependencies
import { createContext, Component } from 'react';
import { observable, action, autorun, reaction } from 'mobx';
import { canUseSessionStorage } from 'utils/dom';
import { persistState, applyInitialData } from 'utils/store';
import { TechnologyRadarImpl } from '../technology-radar';
import { last } from 'utils/collection';

const SESSION_STORAGE_KEY = 'cnb--application-state';

export class ApplicationStateImpl implements ApplicationState {
  @observable
  title = 'Technology Radar';

  @observable
  logo = require('public/assets/logo.svg');

  @observable
  editMode = false;

  @observable
  selectedTechnology = null;

  @observable
  selectedGroup = null;

  @observable
  technologyRadar = new TechnologyRadarImpl();

  constructor(initialState: any = {}, boundProvider?: Component) {
    initialState = Object.assign({}, initialState);

    applyInitialData(this, initialState, {
      technologyRadar: (data) => {
        return new TechnologyRadarImpl(data);
      }
    });

    if (canUseSessionStorage()) {
      autorun(() => {
        persistState(SESSION_STORAGE_KEY, this);
      });
    }

    if (Boolean(boundProvider)) {
      reaction(() => Date.now, () => {
        const mounted = (boundProvider as any).isMounted;

        if (!mounted) {
          return;
        }
        boundProvider.setState(this);
      });
    }

    this.addTechnologyChangesReactions();
    this.addGroupChangeseReactions();
  }

  // ----------------------------------------------------------------------------- Action methods
  @action.bound
  selectTechnology(selected: Technology): void {
    this.selectedTechnology = selected;
  }

  @action.bound
  selectGroup(selected: Group): void {
    this.selectedGroup = selected;
  }

  @action.bound
  setEditMode(value: boolean): void {
    this.editMode = value;
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private addTechnologyChangesReactions() {
    reaction(() => this.technologyRadar.groups.length, () => {
      if (!this.technologyRadar.groups.includes(this.selectedGroup)) {
        return this.selectGroup(null);
      }
      this.selectGroup(last(this.technologyRadar.groups));
    });
  }

  private addGroupChangeseReactions() {
    reaction(() => this.technologyRadar.technologies.length, () => {
      if (!this.technologyRadar.technologies.includes(this.selectedTechnology)) {
        return this.selectGroup(null);
      }
      this.selectTechnology(last(this.technologyRadar.technologies));
    });
  }
}

export const ApplicationState = createContext(new ApplicationStateImpl());
