var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { layoutWide, remSize, typoDefault, zIndex } from '../../../../components/Styles';
export var styles = function (theme) { return ({
    root: __assign({}, layoutWide({
        margin: '-2.7vmin',
    }), { position: 'relative', margin: '-3.5vmin', zIndex: zIndex.technoloogyRadarLabels }),
    legendGroupLabelsGroup: {
        transformOrigin: 'center',
    },
    legendGroupLabelsElement: {
        overflow: 'visible',
    },
    legendGroupLabelsLabel: __assign({}, layoutWide({
        fontSize: remSize(1.95),
    }), typoDefault(), { fill: theme.primary, fontSize: remSize(2.5), fontWeight: 'lighter', textAnchor: 'middle', transformOrigin: 'center', overflow: 'visible', pointerEvents: 'all', cursor: 'pointer' }),
}); };
//# sourceMappingURL=styles.jss.js.map