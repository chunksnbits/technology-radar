export var groupIndicatorSize = 12;
export var itemSize = function (theme) {
    return groupIndicatorSize + 2 * Math.max(theme.itemBorderSize, 1) + "px";
};
var borderWidth = function (theme) {
    return theme.itemBorderSize ? Math.max(theme.itemBorderSize, 1) + "px" : '2px';
};
var borderWidthHighlight = function (theme) {
    return theme.itemBorderSize ? Math.max(theme.itemBorderSize, 1) + "px" : '2px';
};
var borderWidthActive = function (theme) {
    return theme.itemBorderSize ? Math.max(theme.itemBorderSize + 2, 1) + "px" : '4px';
};
var borderWidthActiveHighlight = function (theme) {
    return theme.itemBorderSize ? Math.max(theme.itemBorderSize + 2, 1) + "px" : '4px';
};
var offsetHighlight = function (theme) {
    return theme.itemBorderSize ? -1 * Math.max(theme.itemBorderSize, 1) + "px" : '-2px';
};
var offsetHighlightActive = function (theme) {
    return theme.itemBorderSize ? -1 * Math.max(theme.itemBorderSize + 2, 1) + "px" : '-4px';
};
export var styles = function (theme) { return ({
    groupIndicator: {
        display: 'inlineBlock',
        position: 'relative',
        width: theme.itemBorderSize,
        height: itemSize(theme),
        minWidth: itemSize(theme),
        minHeight: itemSize(theme),
        borderRadius: itemSize(theme),
        border: borderWidth(theme) + " solid transparent",
        outline: 'none',
        background: theme.base,
        '&::before': {
            content: '""',
            position: 'absolute',
            top: offsetHighlight(theme),
            right: offsetHighlight(theme),
            bottom: offsetHighlight(theme),
            left: offsetHighlight(theme),
            zIndex: 2,
            borderRadius: itemSize(theme),
            border: borderWidthHighlight(theme) + " solid transparent",
            borderRightColor: 'rgba(255, 255, 255, 1.0)',
            opacity: 0.5,
        },
    },
    groupIndicatorFocused: {
        borderWidth: borderWidthActive(theme),
        '&:before': {
            top: offsetHighlightActive(theme),
            right: offsetHighlightActive(theme),
            bottom: offsetHighlightActive(theme),
            left: offsetHighlightActive(theme),
            borderWidth: borderWidthActiveHighlight(theme),
            opacity: 0.85,
        },
    },
}); };
//# sourceMappingURL=styles.jss.js.map