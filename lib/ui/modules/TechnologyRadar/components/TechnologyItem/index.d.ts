import { Component } from 'react';
import * as React from 'react';
import './styles.scss';
export interface TechnologyItemProps {
    className?: string;
    technology: Technology;
    focused: boolean;
    selected: boolean;
    groups?: Group[];
    technologies?: Technology[];
    settings?: TechnologyRadarSettings;
    onSelect?: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
    onMouseOver?: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
    onMouseOut?: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
}
export declare class TechnologyItem extends Component<TechnologyItemProps> {
    shouldComponentUpdate(props: TechnologyItemProps): boolean;
    render(): JSX.Element;
    private propagateSelect;
    private propagateMouseOver;
    private propagateMouseOut;
    private calculateTransforms;
}
