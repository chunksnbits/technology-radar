import { PureComponent } from 'react';
export interface TechnologyRadarProps {
    data?: ApplicationData;
    applicationConfig?: ApplicationConfig;
    layout?: ApplicationLayout;
    theme?: ApplicationTheme;
}
export declare class TechnologyRadar extends PureComponent<Partial<TechnologyRadarProps>> {
    render(): JSX.Element;
}
