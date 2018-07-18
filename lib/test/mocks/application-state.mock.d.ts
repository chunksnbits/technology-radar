export declare const mockApplicationState: (patch?: Partial<ApplicationState>) => {
    focusedTechnology?: Technology;
    selectedTechnology?: Technology;
    selectedGroup?: Group;
    viewMode: string;
    title: string;
    subtitle?: string;
    logo: string;
    breakpoint: string;
};
export declare const mockTechnologyRadar: (patch?: Partial<ApplicationData>) => ApplicationData;
export declare const mockTechnology: (patch?: Partial<Technology>) => Technology;
export declare const mockLevel: (patch?: Partial<Level>) => Level;
export declare const mockGroup: (patch?: Partial<Group>) => {
    id: string;
    group: number;
    name: string;
    description: string;
    color: string;
};
export declare const mockLayout: (patch?: Partial<ApplicationLayout>) => ApplicationLayout;
export declare const mockSettings: (patch?: Partial<TechnologyRadarSettings>) => TechnologyRadarSettings;
