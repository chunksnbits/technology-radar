// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';

// ----------------------------------------------------------------------------- Implementation
export function compose(...decoratorFncs: Function[]) {
  return (arg: Component) => {
    return decoratorFncs.reduce((result, fnc) =>  {
      return fnc(result);
    }, arg);
  };
}
