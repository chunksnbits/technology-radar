
declare interface Store {
  applicationState: ApplicationState;
}

declare interface TechnologyRadarSettings {
  innerRadiusPercent: number;
  outerRadiusPercent: number;
}

declare interface ApplicationState {
  title: string;
  logo: string;

  selectedTechnology: Technology;
  selectedGroup: Group;

  editMode: boolean;
}

declare interface ApplicationStateActions {
  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;

  setEditMode: (value: boolean) => void;
}

declare type ApplicationStateStore = ApplicationState & ApplicationStateActions;

declare interface TechnologyRadar {
  technologies: Technology[];
  groups: Group[];

  edited: boolean;
  settings: TechnologyRadarSettings;
}


declare interface TechnologyRadarActions {
  addGroup: () => void;
  addTechnology: (group: Group) => void;

  updateGroup: (group: Group, key: string, value: any) => void;
  updateTechnology: (technology: Technology, key: string, value: any) => void;

  removeGroup: (group: Group) => void;
  removeTechnology: (technology: Technology) => void;

  clearAll: () => void;
}

declare type TechnologyRadarStore = TechnologyRadar & TechnologyRadarActions;
