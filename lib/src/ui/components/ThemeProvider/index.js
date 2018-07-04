var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, createContext } from 'react';
import * as React from 'react';
export var ThemeProviderContext = createContext({});
// ----------------------------------------------------------------------------- Implementation
var CustomThemeProvider = /** @class */ (function (_super) {
    __extends(CustomThemeProvider, _super);
    function CustomThemeProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    CustomThemeProvider.prototype.render = function () {
        return (React.createElement(ThemeProviderContext.Provider, { value: Object.assign({}, this, this.props.theme) }, this.props.children));
    };
    CustomThemeProvider.defaultProps = {
        theme: require('public/theme.default.json'),
    };
    return CustomThemeProvider;
}(PureComponent));
export { CustomThemeProvider };
//# sourceMappingURL=index.js.map