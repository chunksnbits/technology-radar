import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import './styles.scss';
export interface GlobalBackgroundProps {
    children: ReactNode;
    className?: string;
    position?: 'above' | 'below' | 'auto';
}
export declare class GlobalBackground extends PureComponent<GlobalBackgroundProps> {
    private rootClassName;
    render(): React.ReactPortal;
    private renderContent;
}
