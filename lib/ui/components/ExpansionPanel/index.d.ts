import { PureComponent, Props } from 'react';
import * as React from 'react';
import './styles.scss';
export declare class ExpansionPanelHeader extends PureComponent<Props<void>> {
    render(): React.ReactNode;
}
export declare class ExpansionPanelBody extends PureComponent<Props<void>> {
    render(): React.ReactNode;
}
export declare class ExpansionPanelFooter extends PureComponent<Props<void>> {
    render(): React.ReactNode;
}
export interface ExpansionPanelProps {
    className?: string;
    active: boolean;
    onToggle: Function;
}
export declare class ExpansionPanel extends PureComponent<ExpansionPanelProps> {
    render(): JSX.Element;
    private propagateToggle;
}
