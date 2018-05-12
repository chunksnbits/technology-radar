
// ----------------------------------------------------------------------------- Dependencies
import { observable } from 'mobx';

class ApplicationState {
  @observable
  selectedTechnology: Technology;

  selectTechnology(selected: Technology) {
    this.selectedTechnology = selected;
  }
}

export const applicationState = new ApplicationState();
