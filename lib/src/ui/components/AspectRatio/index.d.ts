import { PureComponent } from 'react';
import { Classes } from 'jss';
import { Layout } from '../LayoutProvider';
export interface AspectRatioProps {
    className?: string;
    classes?: Classes;
    layout?: Layout;
    ratio: number;
}
export declare class AspectRatio extends PureComponent<AspectRatioProps> {
    render(): JSX.Element;
}
