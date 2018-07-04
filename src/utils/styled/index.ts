
// ----------------------------------------------------------------------------- Dependencies
import { ComponentClass, StatelessComponent } from 'react';

import { createTheming } from 'react-jss'
import injectSheet from 'react-jss'

// ----------------------------------------------------------------------------- Configuration
export type Styles = any;

export const theming = createTheming('__MY_NAMESPACED_THEME__');
export const GlobalThemeProvider = theming.ThemeProvider;

// ----------------------------------------------------------------------------- Implementation
export function styled<T>(styles: Styles): (component: ComponentClass<T> | StatelessComponent<T>) => any {
  return (InnerComponent: ComponentClass<T> | StatelessComponent<T>) => {
    return injectSheet(styles, { theming })(InnerComponent);
  };
}
