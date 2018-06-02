
declare type ApplicationStateStore = ApplicationState & ApplicationStateActions;
declare type TechnologyRadarStore = TechnologyRadar & TechnologyRadarActions;

declare interface ApplicationState {
  title?: string;
  logo?: string;

  selectedTechnology?: Technology;
  selectedGroup?: Group;

  editMode?: boolean;
  editor?: boolean;
  owner?: boolean;
}

declare interface ApplicationStateActions {
  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;

  setOwner: (value: boolean) => void;
  setEditMode: (value: boolean) => void;

  reset: () => void;
}

declare interface TechnologyRadar {
  technologies?: Technology[];
  groups?: Group[];

  edited?: boolean;
  settings?: TechnologyRadarSettings;
}

declare interface TechnologyRadarSettings {
  innerRadiusPercent: number;
  outerRadiusPercent: number;
}

declare interface TechnologyRadarActions {
  createNew: () => void;
  edit: () => void;

  addGroup: () => void;
  addTechnology: (group: Group) => void;

  updateGroup: (group: Group, key: string, value: any) => void;
  updateTechnology: (technology: Technology, key: string, value: any) => void;

  removeGroup: (group: Group) => void;
  removeTechnology: (technology: Technology) => void;

  clearAll: () => void;
}
