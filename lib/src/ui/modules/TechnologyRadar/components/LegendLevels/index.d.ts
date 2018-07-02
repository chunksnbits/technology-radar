import { PureComponent } from 'react';
import './styles.scss';
export interface LegendLevelsProps {
    className?: string;
    innerRadiusPercent: number;
    outerRadiusPercent: number;
    technologies: Technology[];
    levels: Level[];
}
export declare class LegendLevels extends PureComponent<LegendLevelsProps> {
    render(): JSX.Element;
}
