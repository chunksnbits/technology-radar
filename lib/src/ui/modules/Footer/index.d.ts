import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface FooterProps {
    className?: string;
    classes?: Classes;
    viewMode?: ViewMode;
    toggleViewMode?: () => void;
}
export declare class Footer extends PureComponent<FooterProps> {
    handlers: BoundHandlers<any>;
    render(): JSX.Element;
    private toggleListViewHandler;
}
