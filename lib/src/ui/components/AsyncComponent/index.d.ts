import { Component, PureComponent } from 'react';
export interface AsyncComponentState {
    promise?: Promise<any> | null;
    component?: Component;
}
export interface AsyncComponentProps {
    className?: string;
    onLoad: () => Promise<any>;
    componentName?: string;
}
export declare class AsyncComponent extends PureComponent<AsyncComponentProps, AsyncComponentState> {
    constructor(props: AsyncComponentProps);
    render(): JSX.Element;
    private initialize;
}
