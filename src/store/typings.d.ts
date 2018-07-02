
declare type ApplicationStateStore = ApplicationState & ApplicationStateActions;
declare type TechnologyRadarStore = TechnologyRadar;

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

  viewMode?: ViewMode;
  theme: ApplicationTheme;
}

declare interface ApplicationStateActions {
  focusTechnology: (focused: Technology) => void;
  updateBreakpoint: (width: number, height: number) => void;

  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;

  toggleViewMode: () => void;

  reset: () => void;
}

declare interface TechnologyRadar {
  technologies?: Technology[];
  groups?: Group[];
  levels?: Level[];

  settings?: TechnologyRadarSettings;
}

declare interface TechnologyRadarSettings {
  innerRadiusPercent: number;
  outerRadiusPercent: number;
}
