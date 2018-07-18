var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { transitionDefault } from '../../../Styles';
export var styles = function (theme) { return ({
    root: {
        position: 'relative',
        height: '100%',
        overflow: 'auto',
    },
    tabsWrapperHeader: {
        background: theme.base,
    },
    '$tabsWrapperFixed $tabsWrapperHeader': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
    },
    '$tabsWrapperSticky $tabsWrapperHeader': {
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
    },
    tabsWrapperBody: __assign({}, transitionDefault('transform'), { display: 'flex', flexWrap: 'nowrap', position: 'relative' }),
}); };
//# sourceMappingURL=styles.jss.js.map