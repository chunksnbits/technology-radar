
// ----------------------------------------------------------------------------- Dependencies
import { observable } from 'mobx';

export class ApplicationState {
  @observable
  selectedTechnology: Technology = null;

  @observable
  technologies: Technology[] = [];

  @observable
  groups: Group[] = [];

  constructor(innitialState: any = {}) {
    Object.assign(this, innitialState);
  }

  selectTechnology(selected: Technology) {
    this.selectedTechnology = selected;
  }
}
