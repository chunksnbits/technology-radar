var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { typoCopySmall, rgba } from '../../../../components/Styles';
export var styles = function (theme) {
    return {
        root: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
        },
        legendLevelsLevel: __assign({}, typoCopySmall(), { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderWidth: '1px', borderStyle: 'solid', borderRadius: '100vmin', color: theme.secondary, borderColor: rgba(theme.accent || theme.primary, 0.4) }),
        legendLevelsLevelLabel: {
            display: 'block',
            position: 'relative',
            transform: 'translateY(-50%)',
            padding: '0 1.75vmin',
            color: theme.primary,
        },
    };
};
//# sourceMappingURL=styles.jss.js.map