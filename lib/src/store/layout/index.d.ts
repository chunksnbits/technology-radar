import { PureComponent, Context } from 'react';
export interface LayoutStateProviderProps {
    layout?: ApplicationLayout;
}
export declare const LayoutContext: Context<LayoutStore>;
export declare class LayoutProvider extends PureComponent<LayoutStateProviderProps, LayoutStore> implements LayoutActions {
    constructor(props: LayoutStateProviderProps);
    render(): JSX.Element;
    setActiveBreakpoint(breakpoint: Breakpoint): void;
    setDeviceOrientation(orientation: DeviceOrientation): void;
}
