import * as React from 'react';
import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface TechnologyDetailsNavigationProps {
    className?: string;
    classes?: Classes;
    technologies: Technology[];
    selectedTechnology: Technology;
    onSelect: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
}
export declare class TechnologyDetailsNavigation extends PureComponent<TechnologyDetailsNavigationProps> {
    render(): JSX.Element;
    private propagateSelectPrevHandler;
    private propagateSelectNextHandler;
    private getNext;
    private getPrev;
}
