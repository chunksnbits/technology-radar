
declare type ApplicationStateStore = ApplicationState & ApplicationStateActions;
declare type TechnologyRadarStore = TechnologyRadar & TechnologyRadarActions;

declare type Breakpoint = 'small' | 'medium' | 'large';
declare type ViewMode = 'list' | 'radar';

declare interface ApplicationState {
  title?: string;
  subtitle?: string;
  logo?: string;

  breakpoint?: Breakpoint,

  focusedTechnology?: Technology;
  selectedTechnology?: Technology;
  selectedGroup?: Group;

  editMode?: boolean;
  editor?: boolean;
  owner?: boolean;

  viewMode?: ViewMode;
}

declare interface ApplicationStateActions {
  focusTechnology: (focused: Technology) => void;
  updateBreakpoint: (width: number, height: number) => void;

  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;

  setOwner: (value: boolean) => void;
  setEditMode: (value: boolean) => void;
  toggleViewMode: () => void;

  reset: () => void;
}

declare interface TechnologyRadar {
  technologies?: Technology[];
  groups?: Group[];
  levels?: Level[];

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
