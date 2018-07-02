"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Implementation
function canUseDOM() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
exports.canUseDOM = canUseDOM;
//# sourceMappingURL=can-use-dom.js.map