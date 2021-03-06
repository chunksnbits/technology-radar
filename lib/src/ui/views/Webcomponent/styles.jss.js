var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { typoDefault, remBaseSize, remSize, typoFontWeightLight } from '../../components/Styles';
export var styles = {
    '@global': {
        ':host': __assign({}, typoDefault(), { display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', width: '100%', height: '100%', margin: '0', padding: '40px 0 50px', overflow: 'hidden', fontSize: remBaseSize + "px" }),
        '*, *::before, *::after': {
            boxSizing: 'border-box',
        },
        'h1, h2, h3, h4, h5, h6, p, ul, li': {
            margin: '0',
            padding: '0',
        },
        ul: {
            listStyle: 'none',
        },
        'ul, li': __assign({}, typoDefault()),
        h1: {
            fontSize: remSize(48),
            fontWeight: typoFontWeightLight,
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: remSize(16),
            fontWeight: typoFontWeightLight,
        },
        p: {
            fontSize: remSize(14),
            fontWeight: typoFontWeightLight,
        },
    },
};
//# sourceMappingURL=styles.jss.js.map