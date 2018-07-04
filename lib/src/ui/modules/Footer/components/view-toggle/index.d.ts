import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface ViewToggleProps {
    className?: string;
    classes?: Classes;
    viewMode: ViewMode;
    onClick: () => void;
}
export declare class ViewToggle extends PureComponent<ViewToggleProps> {
    render(): JSX.Element;
}
