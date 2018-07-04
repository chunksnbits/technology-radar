import { ComponentClass, StatelessComponent } from 'react';
export interface AttributesMap {
    [key: string]: string | number | object;
}
export declare function webcomponent<T>(): (component: ComponentClass<T> | StatelessComponent<T>) => any;
