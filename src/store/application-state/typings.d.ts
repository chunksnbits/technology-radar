
declare interface ApplicationState {
  selectedTechnology: Technology;

  selectTechnology: (selected: Technology) => void;
}
