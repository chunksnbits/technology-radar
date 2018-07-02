import { PureComponent, Context } from 'react';
export interface TechnologyRadarProviderProps {
    initialState?: TechnologyRadar;
    applicationState?: ApplicationState & ApplicationStateActions;
}
export declare const TechnologyRadarContext: Context<TechnologyRadarProvider>;
export declare class TechnologyRadarProvider extends PureComponent<TechnologyRadarProviderProps, TechnologyRadarStore> {
    constructor(props: TechnologyRadarProviderProps);
    render(): JSX.Element;
    private sortTechnologies;
    private groupIndex;
}
