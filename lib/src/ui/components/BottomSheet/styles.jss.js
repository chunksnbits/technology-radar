var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { layoutWide, transitionDefault, zIndex, rgba } from '../Styles';
var bottomSheetMargin = '5px';
var bottomSheetPadding = '15px';
var bottomSheetMaxWidth = '530px';
var bottomSheetNavigationActionSize = '48px';
export var styles = function (theme) { return ({
    root: __assign({}, layoutWide({
        alignItems: 'flex-end',
    }), transitionDefault('transform'), { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', position: 'absolute', left: '0', bottom: '0', width: '100%', maxHeight: '100%', zIndex: zIndex.bottomSheet, padding: bottomSheetMargin, transform: 'translate3d(0, 150%, 0)', pointerEvents: 'none' }),
    rootActive: {
        transform: 'translate3d(0, 0, 0)',
    },
    content: __assign({}, layoutWide({
        maxWidth: bottomSheetMaxWidth,
    }), { display: 'flex', position: 'relative', left: 'auto', right: 'auto', height: '100%', zIndex: '1', margin: '0', padding: bottomSheetPadding, color: theme.primary, background: rgba(theme.base, 0.95), border: '0' }),
    navigation: {
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: '2',
        padding: '5px',
        pointerEvents: 'none',
    },
    navigationAction: {
        pointerEvents: 'all',
        minWidth: 0,
        height: bottomSheetNavigationActionSize,
        width: bottomSheetNavigationActionSize,
        borderRadius: bottomSheetNavigationActionSize,
        '&, &:hover, &:focus': {
            background: theme.base,
        },
    },
    navigationActionClose: {
        width: '48px',
        height: '48px',
        minWidth: '0',
        padding: '0',
    },
    navigationActionIcon: {
        width: '14px',
        height: '14px',
        fill: theme.primary,
    },
}); };
//# sourceMappingURL=styles.jss.js.map