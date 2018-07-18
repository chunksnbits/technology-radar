// ----------------------------------------------------------------------------- Implementation
export function offsetRoot(element) {
    var root = element;
    do {
        root = root.parentNode;
    } while (Boolean(root.parentNode));
    if (Boolean(root.host)) {
        return root.host;
    }
    return window;
}
;
//# sourceMappingURL=offset-root.js.map