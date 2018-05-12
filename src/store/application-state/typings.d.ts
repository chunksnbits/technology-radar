
declare interface ApplicationState {
  selectedTechnology: Technology;
  technologies: Technology[];
  groups: Group[];

  selectTechnology: (selected: Technology) => void;
}
