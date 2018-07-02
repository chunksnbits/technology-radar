import { PureComponent, ReactNode } from 'react';
import './styles.scss';
export interface FormGroupProps {
    readonly children: ReactNode;
    className?: string;
    label?: string;
    name?: string;
}
export declare class FormGroup extends PureComponent<FormGroupProps> {
    private id;
    render(): JSX.Element;
}
