
declare interface ApplicationState {
  selectedTechnology: Technology;
  selectedGroup: Group;

  technologies: Technology[];
  groups: Group[];

  settings: TechnologyRadarSettings;

  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;
}
