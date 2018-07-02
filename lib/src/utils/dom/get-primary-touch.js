"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Implementation
function getPrimaryTouch(event) {
    if (Boolean(event.touches)) {
        return event.touches.item(0);
    }
    return {
        clientX: event.clientX,
        clientY: event.clientY,
        identifier: 0,
        pageX: event.pageX,
        pageY: event.pageY,
        screenX: event.screenX,
        screenY: event.screenY,
        target: event.target,
    };
}
exports.getPrimaryTouch = getPrimaryTouch;
//# sourceMappingURL=get-primary-touch.js.map