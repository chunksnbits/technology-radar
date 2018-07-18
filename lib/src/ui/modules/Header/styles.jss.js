var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { typoFontWeightLight, layoutWide, typoGroupHeading, typoBlockHeading, typoFontWeightRegular, zIndex, typoCopySmall, rgba, } from '../../components/Styles';
export var styles = function (theme) { return ({
    root: __assign({}, layoutWide({
        background: 'none',
    }), { display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 0, left: 0, width: '100%', zIndex: zIndex.header, pointerEvents: 'none' }),
    headerAppTitle: {
        display: 'inline-flex',
        alignItems: 'flex-start',
        padding: '10px 20px 10px',
        pointerEvents: 'all',
        color: theme.base,
        '&:hover': {
            background: rgba(theme.base, 0.7),
        },
    },
    headerLogo: __assign({}, layoutWide({
        width: '22px',
        marginRight: '4px',
        marginTop: '-1px',
    }), { display: 'inline-flex', width: '22px', marginRight: '2px', marginTop: '-4px' }),
    headerName: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0 4px',
        color: theme.primary,
    },
    headerTitle: __assign({}, layoutWide(__assign({}, typoBlockHeading(), { lineHeight: 1 })), typoGroupHeading(), { display: 'inline-block', fontWeight: typoFontWeightLight, lineHeight: 1, textAlign: 'start' }),
    headerSubtitle: __assign({}, layoutWide(__assign({}, typoCopySmall())), typoCopySmall(), { fontWeight: typoFontWeightRegular, textTransform: 'none', textAlign: 'start' }),
}); };
//# sourceMappingURL=styles.jss.js.map