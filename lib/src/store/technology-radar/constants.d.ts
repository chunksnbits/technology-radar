export declare const defaultColors: string[];
export declare const defaultTechnology: (group: Group, id?: string) => Technology;
export declare const defaultGroup: (group: number, id?: string) => {
    name: string;
    id: string;
    group: number;
    description: string;
    color: string;
};
export declare const defaultState: () => {
    edited: boolean;
    technologies: (Technology & {
        name: string;
        level: number;
    })[];
    groups: ({
        name: string;
        id: string;
        group: number;
        description: string;
        color: string;
    } & {
        name: string;
        color: string;
    })[];
    settings: {
        editable: boolean;
        edited: boolean;
        innerRadiusPercent: number;
        outerRadiusPercent: number;
    };
};
