var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { transitionDefault, layoutWide } from '../../components/Styles';
export var styles = function (theme) { return ({
    root: __assign({}, layoutWide({
        background: theme.base,
        padding: '20px 10px 25px',
        maxWidth: '600px',
    }), transitionDefault('transform', { delay: '0.1s' }), { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', width: '100%', padding: '85px 5px 70px', WebkitOverflowScrolling: 'touch', background: theme.base }),
    technologyListItems: {
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    technologyListHidden: __assign({}, layoutWide({
        transform: 'translateX(50vw)',
    }), { transform: 'translateX(101vw)' }),
    technologyListGroupItems: {
        padding: '5px 0 15px',
    },
    technologyListItemHidden: {
        display: 'none',
    },
}); };
//# sourceMappingURL=styles.jss.js.map