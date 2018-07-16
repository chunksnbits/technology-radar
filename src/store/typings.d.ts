
declare type ApplicationStateStore = ApplicationState & ApplicationStateActions;
declare type LayoutStore = LayoutState & LayoutActions;
declare type TechnologyRadarStore = ApplicationData;

declare type Breakpoint = 'small' | 'medium' | 'large';
declare type ViewMode = 'list' | 'radar';

declare interface ApplicationState extends ApplicationConfig {
  focusedTechnology?: Technology;
  selectedTechnology?: Technology;
  selectedGroup?: Group;

  viewMode?: ViewMode;
}

declare interface LayoutState extends ApplicationLayout {
  activeBreakpoint: Breakpoint;
  orientation: DeviceOrientation;
}

declare interface LayoutActions {
  setActiveBreakpoint: (breakpoint: Breakpoint) => void;
  setDeviceOrientation: (orientation: DeviceOrientation) => void;
}

declare interface ApplicationStateActions {
  focusTechnology: (focused: Technology) => void;

  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;

  toggleViewMode: () => void;

  reset: () => void;
}
