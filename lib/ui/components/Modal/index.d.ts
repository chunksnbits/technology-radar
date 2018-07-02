import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import './styles.scss';
export interface ModalProps {
    children: ReactNode;
    className?: string;
    open?: boolean;
    type?: 'sidebar';
    position?: 'document' | 'parent';
    onClose: (event: React.MouseEvent<HTMLElement>) => any;
    onCloseOutside?: (event: React.MouseEvent<HTMLElement>) => any;
}
export declare class Modal extends PureComponent<ModalProps> {
    private rootClassName;
    render(): React.ReactPortal | JSX.Element;
    private renderDialog;
    private isShowBackdrop;
}
