import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface LogoProps {
    className?: string;
    classes?: Classes;
    name: string;
    color?: string;
}
export declare class Logo extends PureComponent<LogoProps> {
    render(): JSX.Element;
}
