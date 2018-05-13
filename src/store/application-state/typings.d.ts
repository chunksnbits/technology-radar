
declare interface ApplicationState {
  title: string;
  logo: string;

  selectedTechnology: Technology;
  selectedGroup: Group;

  technologies: Technology[];
  groups: Group[];

  settings: TechnologyRadarSettings;

  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;
}
