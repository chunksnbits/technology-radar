
// ----------------------------------------------------------------------------- Dependencies
import { observable, action, autorun, reaction } from 'mobx';
import { canUseSessionStorage } from 'utils/dom';
import { restoreState, persistState, applyInitialData } from 'utils/store';
import { TechnologyRadarImpl } from '../technology-radar';
import { last } from 'utils/collection';

const SESSION_STORAGE_KEY = 'cnb--application-state';

export class ApplicationStateImpl implements ApplicationState {
  @observable
  title: string = 'Technology Radar';

  @observable
  logo: string = require('public/assets/logo.svg');

  @observable
  editMode: boolean = false;

  @observable
  selectedTechnology: Technology = null;

  @observable
  selectedGroup: Group = null;

  @observable
  technologyRadar: TechnologyRadar = new TechnologyRadarImpl();

  constructor(initialState: any = {}) {
    initialState = Object.assign(initialState, restoreState(SESSION_STORAGE_KEY));

    applyInitialData(this, initialState, {
      technologyRadar: (data) => new TechnologyRadarImpl(data)
    });

    if (canUseSessionStorage()) {
      autorun(() => {
        persistState(SESSION_STORAGE_KEY, this);
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
