import { PureComponent } from 'react';
import * as React from 'react';
import { Classes } from 'jss';
export interface RippleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string;
    classes?: Classes;
    position?: 'relative' | 'exact' | undefined;
}
export declare class Ripple extends PureComponent<RippleProps> {
    private elementRef;
    constructor(props: RippleProps);
    render(): JSX.Element;
    private applyRippleHandler;
    private applyRipple;
    private registerReset;
}
