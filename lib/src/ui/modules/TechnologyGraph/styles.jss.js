var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { layoutWide, transitionDefault, stripUnit, rgba } from '../../components/Styles';
var technologyGraphCenterCircleSize = '20px';
export var styles = function (theme) { return ({
    root: __assign({}, layoutWide({
        padding: '5.25vmin',
    }), transitionDefault('transform'), { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '7.25vmin', '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: "translate(\n        " + -0.5 * stripUnit(technologyGraphCenterCircleSize) + "px,\n        " + -0.5 * stripUnit(technologyGraphCenterCircleSize) + "px\n      )",
            width: technologyGraphCenterCircleSize,
            height: technologyGraphCenterCircleSize,
            borderRadius: technologyGraphCenterCircleSize,
            zIndex: 2,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: rgba(theme.accent || theme.primary, 0.9),
            background: theme.base,
        } }),
    technologyGraphWillChange: {
        willChange: 'transform',
    },
    technologyGraphContent: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    technologyGraphTechnologies: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    technologyGraphLegend: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    },
}); };
//# sourceMappingURL=styles.jss.js.map