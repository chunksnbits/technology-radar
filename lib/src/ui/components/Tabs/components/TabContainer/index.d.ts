import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface TabContainerProps {
    className?: string;
    classes: Classes;
    active: boolean;
}
export declare class TabBody extends PureComponent<TabContainerProps> {
    render(): JSX.Element;
}
