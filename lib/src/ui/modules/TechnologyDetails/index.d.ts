import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface TechnologyDetailsProps {
    className?: string;
    classes?: Classes;
    groups?: Group[];
    technologies?: Technology[];
    selectedTechnology?: Technology;
    selectTechnology?: (technology: Technology) => void;
    selectGroup?: (group: Group) => void;
}
export declare class TechnologyDetails extends PureComponent<TechnologyDetailsProps> {
    render(): JSX.Element;
    selectGroupHandler: () => void;
    selectTechnologyHandler: (technology: Technology) => void;
    private findGroupForTechnology;
}
