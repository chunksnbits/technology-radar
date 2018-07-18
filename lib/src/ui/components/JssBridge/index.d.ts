import { PureComponent } from 'react';
export interface JssBridgeProps {
    attach?: StyleSheet[];
}
export interface JssBridgeState {
    jss: any;
}
export declare class JssBridge extends PureComponent<JssBridgeProps, JssBridgeState> {
    private elementRef;
    constructor(props: JssBridgeProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
