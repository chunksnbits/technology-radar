import { PureComponent } from 'react';
import './styles.scss';
export interface LogoProps {
    className?: string;
    name: string;
    color?: string;
}
export declare class Logo extends PureComponent<LogoProps> {
    render(): JSX.Element;
}
