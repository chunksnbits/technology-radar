import { PureComponent, Context } from 'react';
export interface ApplicationStateProps {
    initialState?: ApplicationState;
}
export declare const ApplicationStateContext: Context<ApplicationState & ApplicationStateActions>;
export declare class ApplicationStateProvider extends PureComponent<ApplicationStateProps, ApplicationState & ApplicationStateActions> implements ApplicationStateActions {
    constructor(props: ApplicationStateProps);
    componentWillMount(): void;
    render(): JSX.Element;
    updateBreakpoint(width: number): void;
    reset(): void;
    focusTechnology(focused: Technology): void;
    selectTechnology(selected: Technology): void;
    selectGroup(selected: Group): void;
    toggleViewMode(): void;
    private restoreState;
}
