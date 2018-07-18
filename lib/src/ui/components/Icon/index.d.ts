import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface IconProps {
    className?: string;
    color?: string;
    classes?: Classes;
    name: string;
    size?: number | string;
}
export declare class Icon extends PureComponent<IconProps> {
    render(): JSX.Element;
    private isNumberLike;
}
