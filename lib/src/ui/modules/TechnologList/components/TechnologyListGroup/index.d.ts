import { ReactNode, PureComponent } from 'react';
import { Classes } from 'jss';
export interface TechnologyListGroupProps {
    className?: string;
    classes?: Classes;
    children: ReactNode;
}
export declare class TechnologyListGroup extends PureComponent<TechnologyListGroupProps> {
    render(): JSX.Element;
}
