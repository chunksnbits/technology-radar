import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface HeaderProps {
    className?: string;
    classes?: Classes;
    logo?: string;
    title?: string;
    subtitle?: string;
    reset?: () => void;
}
export declare class Header extends PureComponent<HeaderProps> {
    render(): JSX.Element;
}
