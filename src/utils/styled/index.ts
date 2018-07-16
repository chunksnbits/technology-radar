
// ----------------------------------------------------------------------------- Dependencies
import { ComponentClass, StatelessComponent } from 'react';

import injectSheet from 'react-jss';
import { theming } from 'store';

// ----------------------------------------------------------------------------- Implementation
export function styled<T>(styles: any): (component: ComponentClass<T> | StatelessComponent<T>) => any {
  return (InnerComponent: ComponentClass<T> | StatelessComponent<T>) => {
    return injectSheet(styles, { theming })(InnerComponent);
  };
}
