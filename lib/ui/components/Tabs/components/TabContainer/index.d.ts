import { PureComponent } from 'react';
import './styles.scss';
export interface TabContainerProps {
    className?: string;
    active: boolean;
}
export declare class TabBody extends PureComponent<TabContainerProps> {
    render(): JSX.Element;
}
