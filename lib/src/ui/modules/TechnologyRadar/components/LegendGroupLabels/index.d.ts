import { PureComponent, MouseEventHandler } from 'react';
import * as React from 'react';
import './styles.scss';
export interface LegendGroupLabelsProps {
    className?: string;
    groups: Group[];
    onSelect: (group: Group, event: React.MouseEvent<SVGTextElement>) => any;
}
export declare class LegendGroupLabels extends PureComponent<LegendGroupLabelsProps> {
    handlers: BoundHandlers<MouseEventHandler<SVGTextElement>>;
    render(): JSX.Element;
    bindSelectGroupHandler(group: Group): MouseEventHandler<SVGTextElement>;
    private renderLabels;
}
