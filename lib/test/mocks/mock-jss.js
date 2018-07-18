// ----------------------------------------------------------------------------- Dependencies
import jss from 'jss';
// ----------------------------------------------------------------------------- Implementation
var createGenerateClassName = function () {
    return function (rule) {
        return rule.key;
    };
};
jss.setup({ createGenerateClassName: createGenerateClassName });
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
jest.mock('utils/styled', function () { return ({
    styled: function styled() {
        return function (WrappedComponent) {
            WrappedComponent.defaultProps = Object.assign(WrappedComponent.defaultProps || {}, { classes: {} });
            return WrappedComponent;
        };
    },
}); });
//# sourceMappingURL=mock-jss.js.map