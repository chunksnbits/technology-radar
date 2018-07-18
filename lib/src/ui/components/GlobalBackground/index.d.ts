import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { Classes } from 'jss';
export declare const GLOBAL_BACKGROUND_ANCHOR_ID = "g-global-background";
export interface GlobalBackgroundProps {
    children?: ReactNode;
    classes?: Classes;
    theme?: ApplicationTheme;
    className?: string;
    position?: 'above' | 'below' | 'auto';
}
export declare class GlobalBackgroundRoot extends PureComponent<GlobalBackgroundProps> {
    render(): JSX.Element;
}
export declare class GlobalBackground extends PureComponent<GlobalBackgroundProps> {
    render(): React.ReactPortal;
    private renderContent;
}
