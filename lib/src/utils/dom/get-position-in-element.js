// ----------------------------------------------------------------------------- Implementation
export function getPositionInElement(element, position) {
    var rect = element.getBoundingClientRect();
    return {
        x: position.clientX - rect.left,
        y: position.clientY - rect.top,
    };
}
//# sourceMappingURL=get-position-in-element.js.map