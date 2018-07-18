import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface TextButtonProps {
    className?: string;
    classes?: Classes;
    onClick: Function;
}
export declare class TextButton extends PureComponent<TextButtonProps> {
    render(): JSX.Element;
}
