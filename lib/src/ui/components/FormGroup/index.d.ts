import { PureComponent, ReactNode } from 'react';
import { Classes } from 'jss';
export interface FormGroupProps {
    readonly children: ReactNode;
    classes?: Classes;
    className?: string;
    label?: string;
    name?: string;
}
export declare class FormGroup extends PureComponent<FormGroupProps> {
    private id;
    render(): JSX.Element;
}
