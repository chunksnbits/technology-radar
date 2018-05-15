
declare interface ApplicationState {
  title: string;
  logo: string;

  editMode: boolean;

  selectedTechnology: Technology;
  selectedGroup: Group;

  technologies: Technology[];
  groups: Group[];

  settings: TechnologyRadarSettings;

  selectTechnology: (selected: Technology) => void;
  selectGroup: (selected: Group) => void;

  setEditMode: (value: boolean) => void;

  updateGroup: (group: Group, key: string, value: any) => void;
  updateTechnology: (technology: Technology, key: string, value: any) => void;

  addGroup: () => void;
  addTechnology: (group: Group) => void;
  clearAll: () => void;
}
