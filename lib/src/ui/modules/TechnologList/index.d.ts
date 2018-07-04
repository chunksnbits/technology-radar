import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface TechnologyListProps {
    className?: string;
    classes?: Classes;
    technologies?: Technology[];
    groups?: Group[];
    breakpoint?: Breakpoint;
    focusedTechnology?: Technology;
    selectedTechnology?: Technology;
    selectedGroup?: Group;
    viewMode?: ViewMode;
    selectTechnology?: (technology: Technology) => void;
    focusTechnology?: (technology: Technology) => void;
}
export declare class TechnologyList extends PureComponent<TechnologyListProps> {
    handlers: BoundHandlers<() => void>;
    render(): JSX.Element;
    private bindSelectTechnologyHandler;
    private bindFocusTechnologyHandler;
    private bindUnfocusTechnologyHandler;
    private groupTechnologies;
    private isHidden;
}
