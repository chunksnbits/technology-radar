"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Implementation
var handlers = {};
function debounce(key, handler, timeout) {
    if (timeout === void 0) { timeout = 100; }
    clearTimeout(handlers[key]);
    handlers[key] = setTimeout(function () { return handler(); }, timeout);
    return function () {
        clearTimeout(handlers[key]);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=index.js.map