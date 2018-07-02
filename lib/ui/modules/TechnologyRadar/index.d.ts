import { PureComponent, RefObject } from 'react';
import './styles.scss';
export interface TechnologyRadarProps {
    className?: string;
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
export declare class TechnologyRadar extends PureComponent<TechnologyRadarProps> {
    elementRef: RefObject<HTMLDivElement>;
    constructor(props: TechnologyRadarProps);
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
