
// ----------------------------------------------------------------------------- Dependencies
import { MouseEvent, TouchEvent } from 'react';

// ----------------------------------------------------------------------------- Configuration
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

// ----------------------------------------------------------------------------- Implementation
export function getPrimaryTouch<T>(event: MouseEvent<T> | TouchEvent<T>): Touch {
  if (Boolean((event as TouchEvent<T>).touches)) {
    return (event as TouchEvent<T>).touches.item(0);
  }

  return {
    clientX: (event as MouseEvent<T>).clientX,
    clientY: (event as MouseEvent<T>).clientY,
    identifier: 0,
    pageX: (event as MouseEvent<T>).pageX,
    pageY: (event as MouseEvent<T>).pageY,
    screenX: (event as MouseEvent<T>).screenX,
    screenY: (event as MouseEvent<T>).screenY,
    target: (event as MouseEvent<T>).target,
  };
}