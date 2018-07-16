import * as color from 'color';
export function rgba(colorString, value) {
    return color(colorString).fade(1 - value).toString();
}
export function mix(colorString, other, value) {
    return color(colorString).mix(color(other), value).toString();
}
export var backgroundColor = function (theme) { return theme.backgroundTextContent || theme.base; };
export var textColor = function (theme) { return theme.textContent || theme.primary; };
//# sourceMappingURL=colors.jss.js.map