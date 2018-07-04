import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { Classes } from 'jss';
export interface BottomSheetProps {
    children: ReactNode;
    className?: string;
    classes?: Classes;
    theme?: ApplicationTheme;
    active?: boolean;
    onClose: (event: React.MouseEvent<HTMLElement>) => any;
}
export declare class BottomSheet extends PureComponent<BottomSheetProps> {
    render(): JSX.Element;
}
