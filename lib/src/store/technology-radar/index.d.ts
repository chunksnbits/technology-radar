import { PureComponent, Context } from 'react';
export interface TechnologyRadarProviderProps {
    state?: any;
}
export declare const TechnologyRadarContext: Context<TechnologyRadarProvider>;
export declare class TechnologyRadarProvider extends PureComponent<TechnologyRadarProviderProps, TechnologyRadarStore> {
    render(): JSX.Element;
    private sortTechnologies;
    private groupIndex;
}
