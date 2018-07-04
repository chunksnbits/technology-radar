import { PureComponent, Context } from 'react';
export interface LayoutProviderProps {
    layout?: LayoutBreakpoints;
}
export interface LayoutProviderState {
    layout?: LayoutBreakpoints;
    active: Breakpoint;
    orientation: DeviceOrientation;
}
export declare type Layout = LayoutProviderState;
export declare const LayoutProviderContext: Context<LayoutProviderState>;
export declare const LAYOUT_BASE_CLASS = "g-layout";
export declare const LAYOUT_CLASSES: {
    small: string;
    medium: string;
    large: string;
};
export declare class LayoutProvider extends PureComponent<LayoutProviderProps, LayoutProviderState> {
    private elementRef;
    constructor(props: LayoutProviderProps);
    componentWillUnmount(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private windowResizeHandler;
    private getScreenSize;
    private detectActiveBreakpoint;
    private detectOrientation;
}
