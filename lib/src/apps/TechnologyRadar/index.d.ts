import { PureComponent } from 'react';
export interface TechnologyRadarProps {
    data?: TechnologyRadarState;
    config?: any;
    ApplicationState: any;
    layout?: LayoutBreakpoints;
    theme?: ApplicationTheme;
}
export declare class TechnologyRadar extends PureComponent<TechnologyRadarProps> {
    static defaultProps: {
        data: any;
        config: any;
        layout: any;
        theme: any;
    };
    render(): JSX.Element;
}
