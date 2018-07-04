var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { layoutWide, transitionDefault } from 'core/ui/components/Styles';
export var styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    technologyRadarContentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'nowrap',
        position: 'relative',
        width: '100%',
        maxWidth: '100vmin',
        margin: '0 auto',
        pointerEvents: 'none',
    },
    technologyRadarContentWrapperRadar: __assign({}, layoutWide({
        margin: '0',
    }), transitionDefault('margin-right'), { justifyContent: 'center' }),
    technologyRadarViewList: {
        '& $technologyRadarContentWrapperRadar': __assign({}, layoutWide({
            marginRight: '33%',
        })),
    },
    technologyRadarContentWrapperList: __assign({}, layoutWide({
        width: '33vw',
        justifyContent: 'flex-end',
    }), { position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', justifyContent: 'flex-start' }),
    technologyRadarTechnologyRadarContent: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    technologyRadarContent: {
        pointerEvents: 'all',
    },
    technologyRadarTechnologyRadar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    },
};
//# sourceMappingURL=styles.jss.js.map