// ----------------------------------------------------------------------------- Implementation
export function getPrimaryTouch(event) {
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
//# sourceMappingURL=get-primary-touch.js.map