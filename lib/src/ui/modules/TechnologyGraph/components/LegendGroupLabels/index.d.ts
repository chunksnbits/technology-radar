import { PureComponent, MouseEventHandler } from 'react';
import * as React from 'react';
import { Classes } from 'jss';
export interface LegendGroupLabelsProps {
    className?: string;
    classes?: Classes;
    groups: Group[];
    onSelect: (group: Group, event: React.MouseEvent<SVGTextElement>) => any;
}
export declare class LegendGroupLabels extends PureComponent<LegendGroupLabelsProps> {
    handlers: BoundHandlers<MouseEventHandler<SVGTextElement>>;
    render(): JSX.Element;
    bindSelectGroupHandler(group: Group): MouseEventHandler<SVGTextElement>;
    private renderLabels;
}
