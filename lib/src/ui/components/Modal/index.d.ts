import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { Classes } from 'jss';
export interface ModalProps {
    children?: ReactNode;
    classes?: Classes;
    className?: string;
    open?: boolean;
    type?: 'sidebar';
    position?: 'document' | 'parent';
    onClose: (event: React.MouseEvent<HTMLElement>) => any;
    onCloseOutside?: (event: React.MouseEvent<HTMLElement>) => any;
}
export declare function ModalRoot(): JSX.Element;
export declare class Modal extends PureComponent<ModalProps> {
    render(): React.ReactPortal | JSX.Element;
    private renderDialog;
    private isShowBackdrop;
}
