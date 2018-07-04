import { PureComponent, RefObject } from 'react';
import { Classes } from 'jss';
export interface TechnologyGraphProps {
    className?: string;
    classes?: Classes;
    groups?: Group[];
    levels?: Level[];
    technologies?: Technology[];
    settings?: TechnologyRadarSettings;
    focusedTechnology?: Technology;
    selectedTechnology?: Technology;
    selectedGroup?: Group;
    selectGroup?: (group: Group) => void;
    focusTechnology?: (technology: Technology) => void;
    selectTechnology?: (technology: Technology) => void;
}
export declare class TechnologyGraph extends PureComponent<TechnologyGraphProps> {
    elementRef: RefObject<HTMLDivElement>;
    constructor(props: TechnologyGraphProps);
    /**
     * Adds performance optimization for render intensive tasks.
     */
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private deselectHandler;
    private selectGroupHandler;
    private selectTechnologyHandler;
    private focusTechnologyHandler;
    private unfocusTechnologyHandler;
    private calculateFocusTransforms;
    private calculateFocusedTranfsformForSelectedTechnology;
    private calculateFocusedTranfsformForSelectedGroup;
}
