// ----------------------------------------------------------------------------- Dependencies
export var LAYOUT_BASE_CLASS = 'g-layout';
export var LAYOUT_CLASSES = {
    small: LAYOUT_BASE_CLASS + "--small",
    medium: LAYOUT_BASE_CLASS + "--medium",
    large: LAYOUT_BASE_CLASS + "--large",
};
// ----------------------------------------------------------------------------- Implementation
export var layoutWide = function (inherited) {
    var _a;
    return (_a = {},
        _a["." + LAYOUT_CLASSES.large + " &"] = inherited,
        _a);
};
//# sourceMappingURL=layout.jss.js.map