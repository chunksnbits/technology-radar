import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { Classes } from 'jss';
export interface TabsWrapperProps {
    className?: string;
    classes?: Classes;
    fixed?: boolean;
    sticky?: boolean;
}
export declare class TabsWrapper extends PureComponent<TabsWrapperProps> {
    render(): JSX.Element;
    getTabsHeader(children: ReactNode): React.ReactChild[];
    getTabsBody(children: ReactNode): React.ReactChild[];
    getActiveTabIndex(children: ReactNode): number;
}
