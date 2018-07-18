export function shadowRoot(element) {
    var root = element;
    do {
        root = root.parentNode;
    } while (root && !Boolean(root.host));
    return root ? root.host : null;
}
;
//# sourceMappingURL=shadow-root.js.map