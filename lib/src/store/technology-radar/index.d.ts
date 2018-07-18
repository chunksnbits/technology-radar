import { PureComponent, Context } from 'react';
export interface TechnologyRadarProviderProps {
    state?: any;
}
export declare const TechnologyRadarContext: Context<TechnologyRadarProviderComponent>;
export declare class TechnologyRadarProviderComponent extends PureComponent<TechnologyRadarProviderProps, TechnologyRadarStore> {
    render(): JSX.Element;
    private sortTechnologies;
    private groupIndex;
}
export declare class TechnologyRadarProvider extends TechnologyRadarProviderComponent {
}
