import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface LegendGroupSeparatorsProps {
    className?: string;
    classes?: Classes;
    groups?: Group[];
}
export declare class LegendGroupSeparators extends PureComponent<LegendGroupSeparatorsProps> {
    render(): JSX.Element;
}
