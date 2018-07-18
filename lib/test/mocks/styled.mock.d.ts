/// <reference types="react" />
import { ShallowWrapper } from 'enzyme';
import { Classes } from 'jss';
export declare const mockTheme: {
    primary: string;
    secondary: string;
    accent: string;
    base: string;
    a11y: string;
    itemBorderSize: number;
};
export declare type BoundShallowFunction<T> = (props?: Partial<T>, children?: JSX.Element | string) => ShallowWrapper;
export declare function createClasses(styles: any): Classes;
export declare function extractSelectors(classes: Classes): Classes;
