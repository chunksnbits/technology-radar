var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { animationDefault } from '../Styles';
export var styles = function (theme) { return ({
    '@keyframes ripple-effect': {
        '0%': {
            transform: 'translate3d(0%, 0%, 0) scale3d(0, 0, 1)',
            opacity: 0,
        },
        '50%': {
            transform: 'translate3d(0%, 0%, 0) scale3d(2, 2, 1)',
            opacity: 0.85,
        },
        '100%': {
            transform: 'translate3d(0%, 0%, 0) scale3d(4.5, 4.5, 1)',
            opacity: 0,
        },
    },
    root: {
        position: 'relative',
    },
    ripple: {
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        border: "1px solid " + theme.primary,
        width: '20px',
        height: '20px',
        borderRadius: '20px',
        opacity: 0,
        borderColor: theme.primary,
    },
    rippleWillChange: {
        ripple: {
            willChange: 'transform, opacity',
        },
    },
    rippleActive: {
        ripple: __assign({}, animationDefault('ripple-effect')),
    },
}); };
//# sourceMappingURL=styles.jss.js.map