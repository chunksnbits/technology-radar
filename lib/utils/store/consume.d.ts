import { Context } from 'react';
export interface BoundComponentOptions {
    bindTo?: string;
    select?: string[];
}
export declare function consume<Props, State>(context: Context<Props>, options: BoundComponentOptions): any;
