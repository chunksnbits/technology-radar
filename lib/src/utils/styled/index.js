import injectSheet from 'react-jss';
import { theming } from 'store';
// ----------------------------------------------------------------------------- Implementation
export function styled(styles) {
    return function (InnerComponent) {
        return injectSheet(styles, { theming: theming })(InnerComponent);
    };
}
//# sourceMappingURL=index.js.map