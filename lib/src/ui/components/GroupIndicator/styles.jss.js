export var groupIndicatorSize = '18px';
var borderWidth = function (theme) {
    return theme.itemSize ? Math.max(theme.itemSize, 1) + "px" : '2px';
};
var borderWidthHighlight = function (theme) {
    return theme.itemSize ? Math.max(theme.itemSize, 1) + "px" : '2px';
};
var borderWidthActive = function (theme) {
    return theme.itemSize ? Math.max(theme.itemSize + 2, 1) + "px" : '4px';
};
var borderWidthActiveHighlight = function (theme) {
    return theme.itemSize ? Math.max(theme.itemSize + 2, 1) + "px" : '4px';
};
var offsetHighlight = function (theme) {
    return theme.itemSize ? -1 * Math.max(theme.itemSize, 1) + "px" : '-2px';
};
var offsetHighlightActive = function (theme) {
    return theme.itemSize ? -1 * Math.max(theme.itemSize + 2, 1) + "px" : '-4px';
};
export var styles = function (theme) { return ({
    groupIndicator: {
        display: 'inlineBlock',
        position: 'relative',
        width: theme.itemSize,
        height: groupIndicatorSize,
        minWidth: groupIndicatorSize,
        minHeight: groupIndicatorSize,
        borderRadius: groupIndicatorSize,
        border: borderWidth(theme) + " solid transparent",
        outline: 'none',
        background: 'none',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: offsetHighlight(theme),
            right: offsetHighlight(theme),
            bottom: offsetHighlight(theme),
            left: offsetHighlight(theme),
            zIndex: 2,
            borderRadius: groupIndicatorSize,
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