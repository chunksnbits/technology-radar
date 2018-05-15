
// ----------------------------------------------------------------------------- Dependencies
import { observable, action, computed, toJS, autorun, set } from 'mobx';
import { uuid } from 'utils/uuid';
import { canUseSessionStorage } from 'utils/dom';

const SESSION_STORAGE_KEY = 'cnb--application-state';

export class ApplicationState {
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
  private data: Data = {
    technologies: [],
    groups: [],
    settings: {
      innerRadiusPercent: 0,
      outerRadiusPercent: 50
    }
  };

  @observable
  private edited: Data = null;

  @computed
  get technologies() {
    return this.edited !== null ? this.edited.technologies : this.data.technologies;
  }

  @computed
  get groups() {
    return this.edited !== null ? this.edited.groups : this.data.groups;
  }

  @computed
  get settings() {
    return this.edited !== null ? this.edited.settings : this.data.settings;
  }

  constructor(initialState: any = {}) {
    const data = Object.assign({}, initialState, this.load());

    this.applyInitialData(data);

    if (canUseSessionStorage()) {
      autorun(() => {
        this.save(JSON.stringify(toJS(this)));
      });
    }
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
    this.edited = toJS(this.data);
  }

  @action.bound
  updateGroup(group: Group, key: string, value: any): void {
    this.assertEditMode('ILLEGAL_STATE: Attempted to change group outside edit mode.');

    const editedGroup = this.edited.groups.find(acc => group.id === acc.id);
    editedGroup[key] = value;
  }

  @action.bound
  updateTechnology(technology: Technology, key: string, value: any): void {
    this.assertEditMode('ILLEGAL_STATE: Attempted to change technology outside edit mode.');

    const editedTechnology = this.edited.technologies.find(acc => technology.id === acc.id);
    editedTechnology[key] = value;
  }

  @action.bound
  addGroup(): void {
    this.assertEditMode('ILLEGAL_STATE: Attempted to change groups outside edit mode.');

    const added = {
      name: '* New *',
      id: uuid(),
      group: this.groups.length,
      description: '',
      color: '#FF0000'
    };

    this.groups.push(added);
    this.selectedGroup = added;
  }

  @action.bound
  addTechnology(group: Group): void {
    this.assertEditMode('ILLEGAL_STATE: Attempted to technologies group outside edit mode.');

    const added = {
      id: uuid(),
      name: '* New *',
      description: '',
      logo: '',
      groupId: group.id,
      level: 0
    };

    this.technologies.push(added);
    this.selectedTechnology = added;
  }

  @action.bound
  clearAll(): void {
    this.assertEditMode('ILLEGAL_STATE: Attempted to clear all outside edit mode.');

    this.edited.technologies = [];
    this.edited.groups = [];
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private applyInitialData(data: any = {}): void {
    Object.entries(data).forEach(([key, value]) => {
      if (!Object(this).hasOwnProperty(key)) {
        return;
      }

      set(this, key, value);
    }, {});
  }

  private assertEditMode(message: string): void {
    if (!Boolean(this.edited)) {
      throw new Error(message);
    }
  }

  private load(): ApplicationState | {} {
    if (!canUseSessionStorage()) {
      return {};
    }

    try {
      const state = sessionStorage.getItem(SESSION_STORAGE_KEY);

      if (!Boolean(state)) {
        return {};
      }

      return JSON.parse(state) as ApplicationState;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.warn('SESSION_STORAGE_NOT_AVAILABLE: Failed to restore application state.');
    }

    return {};
  }

  private save(json: string): void {
    if (!canUseSessionStorage()) {
      return;
    }

    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, json);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.warn('SESSION_STORAGE_NOT_AVAILABLE: Failed to store application state.');
    }
  }
}
