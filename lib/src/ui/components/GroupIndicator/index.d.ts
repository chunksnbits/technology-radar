import { MouseEventHandler } from 'react';
import './styles.scss';
export interface GroupIndicatorProps {
    className?: string;
    color: string;
    focused: boolean;
    large?: boolean;
    onClick?: MouseEventHandler<HTMLSpanElement>;
    onMouseOver?: MouseEventHandler<HTMLSpanElement>;
    onMouseOut?: MouseEventHandler<HTMLSpanElement>;
}
export declare const GroupIndicator: (props: GroupIndicatorProps) => JSX.Element;
