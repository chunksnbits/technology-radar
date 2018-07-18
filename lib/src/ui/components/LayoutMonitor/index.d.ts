import { PureComponent } from 'react';
export interface LayoutMonitorProps {
    className?: string;
    breakpoints?: LayoutBreakpoints;
    activeBreakpoint?: Breakpoint;
    orientation?: DeviceOrientation;
    setActiveBreakpoint?: (breakpoint: Breakpoint) => void;
    setDeviceOrientation?: (orientation: DeviceOrientation) => void;
}
export declare class LayoutMonitor extends PureComponent<LayoutMonitorProps> {
    private elementRef;
    constructor(props: LayoutMonitorProps);
    componentWillUnmount(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private windowResizeHandler;
    private getScreenSize;
    private detectActiveBreakpoint;
    private detectOrientation;
}
