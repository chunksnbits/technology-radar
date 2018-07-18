import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface AspectRatioProps {
    className?: string;
    classes?: Classes;
    orientation?: DeviceOrientation;
    ratio: number;
}
export declare class AspectRatio extends PureComponent<AspectRatioProps> {
    render(): JSX.Element;
}
