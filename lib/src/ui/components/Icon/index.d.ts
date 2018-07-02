import { PureComponent } from 'react';
import './styles.scss';
export interface IconProps {
    className?: string;
    name: string;
    size?: number | string;
}
export declare class Icon extends PureComponent<IconProps> {
    render(): JSX.Element;
    private isNumberLike;
}
