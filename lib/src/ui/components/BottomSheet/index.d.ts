import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import './styles.scss';
export interface BottomSheetProps {
    children: ReactNode;
    className?: string;
    active?: boolean;
    onClose: (event: React.MouseEvent<HTMLElement>) => any;
}
export declare class BottomSheet extends PureComponent<BottomSheetProps> {
    render(): JSX.Element;
}
