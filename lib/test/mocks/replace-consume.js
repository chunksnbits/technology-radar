/**
 * For testing purposes:
 *
 * Mock replacement to replace 'utils/store/consume' import.
 *
 * Will not apply the higher order component defined in original consume,
 * but plainly return the original component instead.
 *
 * Usage:
 *  Add the following line **as the very first line of your spec file**
 *
 *  ```
 *  import 'mocks/replace-consume';
 *  ...
 *  // other imports
 *  // specs
 *  ```
 *
 */
jest.mock('utils/store/consume', function () { return ({
    consume: function consume() {
        return function (WrappedComponent) { return WrappedComponent; };
    }
}); });
//# sourceMappingURL=replace-consume.js.map