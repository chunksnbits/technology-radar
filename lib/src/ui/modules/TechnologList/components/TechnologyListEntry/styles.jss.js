var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { layoutWide, typoCopySmall, typoCopy, typoFontWeightBold } from '../../../../components/Styles';
export var styles = function (theme) { return ({
    root: {
        borderLeft: '1px solid transparent',
        cursor: 'pointer',
    },
    technologyListEntryButton: {
        justifyContent: 'flex-start',
    },
    technologyListEntryLabel: __assign({}, layoutWide(__assign({}, typoCopySmall())), typoCopy(), { display: 'block', width: '100%', textAlign: 'left', color: theme.primary }),
    technologyListEntryFocused: {
        '$technologyListEntryLabel': {
            fontWeight: typoFontWeightBold,
        },
        borderColor: theme.primary,
    },
    technologyListEntryGroupIndicator: {
        marginRight: '10px',
    },
}); };
//# sourceMappingURL=styles.jss.js.map