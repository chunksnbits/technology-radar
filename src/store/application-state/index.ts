
// ----------------------------------------------------------------------------- Dependencies
import { observable, action, computed, toJS } from 'mobx';

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

  constructor(innitialState: any = {}) {
    Object.entries(innitialState).forEach(([key, value]) => {
      if (!Object(this).hasOwnProperty(key)) {
        return;
      }

      this[key] = value;
    });
  }

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
    if (!Boolean(this.edited)) {
      throw new Error('ILLEGAL_STATE: Attempted to change group outside edit mode.');
    }

    const editedGroup = this.edited.groups.find(acc => group.id === acc.id);
    editedGroup[key] = value;
  }

  @action.bound
  updateTechnology(technology: Technology, key: string, value: any): void {
    if (!Boolean(this.edited)) {
      throw new Error('ILLEGAL_STATE: Attempted to change technology outside edit mode.');
    }

    const editedTechnology = this.edited.technologies.find(acc => technology.id === acc.id);
    editedTechnology[key] = value;
  }
}
