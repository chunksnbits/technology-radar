var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { layoutWide, zIndex, transitionDefault } from '../Styles';
var modalBaseMargin = '5px';
var modalBasePadding = '15px';
var modalBaseMaxWidth = '530px';
export var styles = function (theme) { return ({
    modalBackdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: zIndex.modalBackdrop,
    },
    modalBase: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: zIndex.modal,
    },
    '$modalDIalog[open]::backdrop': {
        position: 'relative',
    },
    root: __assign({}, layoutWide({
        alignItems: 'flexend',
    }), { display: 'flex', flexDirection: 'column', justifyContent: 'flexend', position: 'absolute', left: 0, bottom: 0, width: '100%', height: '50%', maxHeight: '50vh', padding: modalBaseMargin, borderColor: theme.secondary }),
    modalDialog: {
        transform: 'translate(0, 105%)',
        opacity: 1,
        background: theme.base,
    },
    '$modalDialog[open]': __assign({}, layoutWide({
        maxWidth: modalBaseMaxWidth,
    }), transitionDefault('transform'), { position: 'relative', display: 'block', padding: modalBasePadding, width: '100%', maxHeight: '100%', left: 'auto', right: 'auto', margin: 0, overflow: 'hidden', border: 0, pointerEvents: 'all', transform: 'translate(0)' }),
    modalSidebar: __assign({}, layoutWide({
        width: '50%',
    }), { top: 0, right: 0, bottom: 0, left: 'auto', width: '100vw', height: '100%', maxHeight: 'none', margin: 0, padding: 0, border: 0 }),
    'modalSidebar $modalDialog[open]': __assign({}, layoutWide({
        borderLeft: '2px solid transparent',
    }), { maxHeight: 'none', width: '100vw', height: '100%' }),
    modalNav: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 2,
        padding: '5px',
        pointerEvents: 'none',
    },
    modalContent: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        overflowX: 'visible',
        overflowY: 'auto',
        zIndex: 1,
    },
    modalNavAction: {
        pointerEvents: 'all',
    },
    modalNavActionClose: {
        width: '48px',
        height: '48px',
        minWidth: 0,
        padding: 0,
    },
    modalNavactionIcon: {
        width: '14px',
        height: '14px',
    },
}); };
//# sourceMappingURL=styles.jss.js.map