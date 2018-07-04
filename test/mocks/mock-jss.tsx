
// ----------------------------------------------------------------------------- Dependencies
import jss from 'jss';

// ----------------------------------------------------------------------------- Implementation
const createGenerateClassName = () => {
  return (rule) => {
    return rule.key;
  };
}

jss.setup({ createGenerateClassName });

/**
 * For testing purposes:
 *
 * Mock replacement to replace 'utils/styled' import.
 *
 * Will not apply the higher order component defined in original styled,
 * but plainly return the original component instead.
 *
 * Usage:
 *  Add the following line **as the very first line of your spec file**
 *
 *  ```
 *  import 'mocks/mock-jss';
 *  ...
 *  // other imports
 *  // specs
 *  ```
 *
 */
jest.mock('utils/styled', () => ({
  styled: function styled(): any {
    return (WrappedComponent: any) => {
      WrappedComponent.defaultProps = Object.assign(WrappedComponent.defaultProps || {}, { classes: {} });

      return WrappedComponent;
    }
  },
}));
