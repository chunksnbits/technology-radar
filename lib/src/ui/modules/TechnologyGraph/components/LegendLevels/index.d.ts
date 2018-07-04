import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface LegendLevelsProps {
    className?: string;
    classes?: Classes;
    innerRadiusPercent: number;
    outerRadiusPercent: number;
    technologies: Technology[];
    levels: Level[];
}
export declare class LegendLevels extends PureComponent<LegendLevelsProps> {
    render(): JSX.Element;
}
