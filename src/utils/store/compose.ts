// ----------------------------------------------------------------------------- Implementation
export function compose(...decoratorFncs: Function[]) {
  return (arg: any) => {
    return decoratorFncs.reduce((result, fnc) =>  {
      return fnc(result);
    }, arg);
  };
}
