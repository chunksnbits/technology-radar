import { ComponentClass, StatelessComponent } from 'react';
export declare type Styles = any;
export declare const theming: any;
export declare const GlobalThemeProvider: any;
export declare function styled<T>(styles: Styles): (component: ComponentClass<T> | StatelessComponent<T>) => any;
