// ----------------------------------------------------------------------------- Implementation
export function canUseDOM() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
//# sourceMappingURL=can-use-dom.js.map