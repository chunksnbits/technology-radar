import { Component, Context } from 'react';
export interface ApplicationStateProps {
    state?: ApplicationState;
    screen?: {
        width: number;
        height: number;
    };
}
export declare const ApplicationStateContext: Context<ApplicationState & ApplicationStateActions>;
export declare class ApplicationStateProvider extends Component<ApplicationStateProps, ApplicationState & ApplicationStateActions> implements ApplicationStateActions {
    constructor(props: ApplicationStateProps);
    render(): JSX.Element;
    reset(): void;
    focusTechnology(focused: Technology): void;
    selectTechnology(selected: Technology): void;
    selectGroup(selected: Group): void;
    toggleViewMode(): void;
    private restoreState;
}
