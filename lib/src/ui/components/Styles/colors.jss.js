import * as color from 'color';
export function rgba(colorString, value) {
    return color(colorString).fade(1 - value).toString();
}
export function mix(colorString, other, value) {
    return color(colorString).mix(color(other), value).toString();
}
//# sourceMappingURL=colors.jss.js.map