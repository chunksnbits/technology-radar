/// <reference types="cheerio" />
import { ReactElement } from 'react';
export declare const mockApplicationState: (patch?: {}) => ApplicationState;
export declare const mockApplicationStateStore: (patch?: {}) => ApplicationState & ApplicationStateActions;
export declare const mockTechnologyRadar: (patch?: {}) => TechnologyRadarState;
export declare const mockTechnologyRadarStore: (patch?: {}) => TechnologyRadarState;
export declare const mockTechnology: (patch?: {}) => Technology;
export declare const mockLevel: (patch?: {}) => Level;
export declare const mockGroup: (patch?: {}) => Group;
export declare const mockSettings: (patch?: {}) => TechnologyRadarSettings;
export declare const shallowWithApplicationState: any;
export declare const mountWithApplicationState: any;
export declare const renderWithApplicationState: (element: ReactElement<any>, applicationState?: any) => Cheerio;
