import { PureComponent } from 'react';
import './styles.scss';
export interface FooterProps {
    className?: string;
    viewMode?: ViewMode;
    toggleViewMode?: () => void;
}
export declare class Footer extends PureComponent<FooterProps> {
    handlers: BoundHandlers<any>;
    render(): JSX.Element;
    private toggleListViewHandler;
}
