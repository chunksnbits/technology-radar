import { MouseEventHandler, PureComponent } from 'react';
import { Classes } from 'jss';
export interface GroupIndicatorProps {
    className?: string;
    classes?: Classes;
    color: string;
    focused: boolean;
    large?: boolean;
    onClick?: MouseEventHandler<HTMLSpanElement>;
    onMouseOver?: MouseEventHandler<HTMLSpanElement>;
    onMouseOut?: MouseEventHandler<HTMLSpanElement>;
}
export declare class GroupIndicator extends PureComponent<GroupIndicatorProps> {
    render(): JSX.Element;
}
