import { MouseEvent, TouchEvent } from 'react';
export interface Touch {
    readonly clientX: number;
    readonly clientY: number;
    readonly identifier: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly target: EventTarget;
}
export declare function getPrimaryTouch<T>(event: MouseEvent<T> | TouchEvent<T>): Touch;
