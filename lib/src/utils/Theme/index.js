import { createTheming } from 'react-jss';
import injectSheet from 'react-jss';
export var theming = createTheming('__MY_NAMESPACED_THEME__');
export var GlobalThemeProvider = theming.ThemeProvider;
// ----------------------------------------------------------------------------- Implementation
export function styled(styles) {
    return function (WrappedComponent) {
        return injectSheet(styles, { theming: theming })(WrappedComponent);
    };
}
//# sourceMappingURL=index.js.map