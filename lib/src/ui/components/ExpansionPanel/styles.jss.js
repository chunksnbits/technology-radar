var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { transitionFaster, typoGroupHeading } from '../Styles';
export var styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        textAlign: 'left',
        appearance: 'none',
        border: '0',
        background: 'none',
        outline: 'none',
        padding: '12px 0',
        cursor: 'pointer',
    },
    headerTitle: __assign({}, typoGroupHeading(), { display: 'flex', flex: '1', alignItems: 'center' }),
    iconicon: __assign({}, transitionFaster('transform'), { display: 'flex', alignItems: 'center', width: '14px', height: '14px', transform: 'scaleY(1)' }),
    expansionPanelActiveUIon: {
        transform: 'scaleY(1)',
    },
    body: {
        display: 'none',
        padding: '12px 0',
    },
    expansionPanelActiveBody: {
        display: 'block',
    },
};
//# sourceMappingURL=styles.jss.js.map