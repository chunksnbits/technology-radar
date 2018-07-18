import { PureComponent, Props } from 'react';
import * as React from 'react';
import { Classes } from 'jss';
export interface ExpansionPanelProps {
    className?: string;
    classes?: Classes;
    active: boolean;
    onToggle: Function;
}
export declare class ExpansionPanelHeader extends PureComponent<Props<void>> {
    render(): React.ReactNode;
}
export declare class ExpansionPanelBody extends PureComponent<Props<void>> {
    render(): React.ReactNode;
}
export declare class ExpansionPanelFooter extends PureComponent<Props<void>> {
    render(): React.ReactNode;
}
export declare class ExpansionPanel extends PureComponent<ExpansionPanelProps> {
    render(): JSX.Element;
    private propagateToggle;
}
