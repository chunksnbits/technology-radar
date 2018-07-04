var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { animationDefault, typoBlockHeading, typoCopy } from '../../components/Styles';
var technologyDetailsColorSize = '14px';
export var styles = function (theme) { return ({
    '@keyframes logo-appear': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: '0.75',
        },
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'none',
        color: theme.primary,
    },
    technologyDetailsActive: {
        pointerEvents: 'all',
    },
    technologyDetailsLogo: __assign({}, animationDefault('logo-appear', { delay: '0.25s' }), { position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', transform: 'scale(1.25) rotateZ(-3deg) translateY(5%)', pointerEvents: 'none' }),
    technologyDetailsContent: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        overflow: 'auto',
    },
    technologyDetailsNavigation: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px',
    },
    technologyDetailsName: __assign({}, typoBlockHeading(), { display: 'flex' }),
    technologyDetailsGroupName: {
        color: theme.primary,
    },
    technologyDetailsGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '4px',
    },
    technologyDetailsDescription: __assign({}, typoCopy(), { marginTop: '15px', paddingBottom: '10px', userSelect: 'none' }),
    technologyDetailsGroupColor: {
        display: 'inline-block',
        width: technologyDetailsColorSize,
        height: technologyDetailsColorSize,
        border: '3px solid transparent',
        borderRadius: technologyDetailsColorSize,
        marginRight: '10px',
    },
}); };
//# sourceMappingURL=styles.jss.js.map