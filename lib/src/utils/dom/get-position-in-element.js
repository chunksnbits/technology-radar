"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Implementation
function getPositionInElement(element, position) {
    var rect = element.getBoundingClientRect();
    return {
        x: position.clientX - rect.left,
        y: position.clientY - rect.top,
    };
}
exports.getPositionInElement = getPositionInElement;
//# sourceMappingURL=get-position-in-element.js.map