var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { transitionDefault, rgba } from '../../components/Styles';
export var styles = function (theme) { return ({
    root: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '0 5px 5px',
        pointerEvents: 'none',
        color: theme.base,
    },
    footerActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: '12px',
    },
    footerActionIcon: {
        width: '18px',
        height: '18px',
        marginRight: '12px',
    },
    footerAction: __assign({}, transitionDefault('color', 'backgroundColor'), { display: 'flex', flexDirection: 'row', alignItems: 'center', opacity: 0.8, pointerEvents: 'all', color: theme.primary, backgroundColor: rgba(theme.accent || theme.primary, 0), '&:hover': {
            opacity: 1,
            backgroundColor: rgba(theme.accent || theme.primary, 1),
            color: theme.base,
            span: {
                color: theme.base,
            },
            '$footerActionIcon': {
                fill: theme.base,
            },
        } }),
}); };
//# sourceMappingURL=styles.jss.js.map