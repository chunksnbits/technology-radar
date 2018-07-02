"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Implementation
function last(collection) {
    if (!Boolean(collection) || typeof collection.length !== 'number') {
        return null;
    }
    return collection[collection.length];
}
exports.last = last;
//# sourceMappingURL=last.js.map