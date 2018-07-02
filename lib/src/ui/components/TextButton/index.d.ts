import { PureComponent } from 'react';
import './styles.scss';
export interface TextButtonProps {
    className?: string;
    onClick: Function;
}
export declare class TextButton extends PureComponent<TextButtonProps> {
    render(): JSX.Element;
}
