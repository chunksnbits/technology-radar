export function offsetRoot(element) {
    var root = element;
    do {
        root = root.parentNode;
    } while (Boolean(root.parentNode));
    return root.host ? root.host : root;
}
;
//# sourceMappingURL=offset-root.js.map