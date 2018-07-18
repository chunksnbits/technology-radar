
// ----------------------------------------------------------------------------- Dependencies
import { ShallowWrapper } from 'enzyme';
import { Classes } from 'jss';

// ----------------------------------------------------------------------------- Configuration
export const mockTheme = {
  primary: 'rgba(255, 255, 255, 1)',
  secondary: 'rgba(175, 175, 175, 1)',
  accent: 'rgba(139, 218, 224, 1)',
  base: 'rgba(2, 22, 12, 1)',
  a11y: '#9c27b0',
  itemBorderSize: 3,
};

// ----------------------------------------------------------------------------- Configuration
export type BoundShallowFunction<T> = (props?: Partial<T>, children?: JSX.Element | string) => ShallowWrapper;

// ----------------------------------------------------------------------------- Implementation
export function createClasses(styles: any): Classes {
  const theme = typeof styles === 'function' ? styles(mockTheme) : styles;

  const classes = Object.keys(theme || {}).reduce((result, key) => {
    return {
      ...result,
      [key]: key,
    };
  }, {});

  return classes;
}

export function extractSelectors(classes: Classes): Classes {
  return Object.keys(classes || {}).reduce((result, key) => {
    return {
      ...result,
      [key]: `.${ key }`,
    };
  }, {});
}
