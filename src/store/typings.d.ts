
declare type ApplicationStateStore = ApplicationState & ApplicationStateActions;
declare type TechnologyRadarStore = TechnologyRadarState;

declare type Breakpoint = 'small' | 'medium' | 'large';
declare type ViewMode = 'list' | 'radar';

declare interface ApplicationState {
  title?: string;
  subtitle?: string;
  logo?: string;

  focusedTechnology?: Technology;
  selectedTechnology?: Technology;
  selectedGroup?: Group;

  viewMode?: ViewMode;
}

declare interface ApplicationStateActions {
  focusTechnology: (focused: Technology) => void;

  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;

  toggleViewMode: () => void;

  reset: () => void;
}

declare interface TechnologyRadarState {
  technologies?: Technology[];
  groups?: Group[];
  levels?: Level[];

  settings?: TechnologyRadarSettings;
}

declare interface TechnologyRadarSettings {
  innerRadiusPercent: number;
  outerRadiusPercent: number;
}
