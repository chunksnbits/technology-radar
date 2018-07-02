import { PureComponent } from 'react';
import './styles.scss';
export interface HeaderProps {
    className?: string;
    logo?: string;
    title?: string;
    subtitle?: string;
    reset?: () => void;
}
export declare class Header extends PureComponent<HeaderProps> {
    render(): JSX.Element;
}
