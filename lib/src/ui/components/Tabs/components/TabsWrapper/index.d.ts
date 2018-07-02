import { PureComponent } from 'react';
import * as React from 'react';
import './styles.scss';
export interface TabsWrapperProps {
    className?: string;
    fixed?: boolean;
    sticky?: boolean;
}
export declare class TabsWrapper extends PureComponent<TabsWrapperProps> {
    render(): JSX.Element;
    readonly tabsHeader: React.ReactChild[];
    readonly tabsBody: React.ReactChild[];
    readonly activeTabIndex: number;
}
