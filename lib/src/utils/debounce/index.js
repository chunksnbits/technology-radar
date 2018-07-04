// ----------------------------------------------------------------------------- Implementation
var handlers = {};
export function debounce(key, handler, timeout) {
    if (timeout === void 0) { timeout = 100; }
    clearTimeout(handlers[key]);
    handlers[key] = setTimeout(function () { return handler(); }, timeout);
    return function () {
        clearTimeout(handlers[key]);
    };
}
//# sourceMappingURL=index.js.map