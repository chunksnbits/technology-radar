var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// ----------------------------------------------------------------------------- Configuration
export var mockTheme = {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(175, 175, 175, 1)',
    accent: 'rgba(139, 218, 224, 1)',
    base: 'rgba(2, 22, 12, 1)',
    a11y: '#9c27b0',
    itemBorderSize: 3,
};
// ----------------------------------------------------------------------------- Implementation
export function createClasses(styles) {
    var theme = typeof styles === 'function' ? styles(mockTheme) : styles;
    var classes = Object.keys(theme || {}).reduce(function (result, key) {
        var _a;
        return __assign({}, result, (_a = {}, _a[key] = key, _a));
    }, {});
    return classes;
}
export function extractSelectors(classes) {
    return Object.keys(classes || {}).reduce(function (result, key) {
        var _a;
        return __assign({}, result, (_a = {}, _a[key] = "." + key, _a));
    }, {});
}
//# sourceMappingURL=styled.mock.js.map