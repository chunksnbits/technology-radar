// ----------------------------------------------------------------------------- Implementation
export function last(collection) {
    if (!Boolean(collection) || typeof collection.length !== 'number') {
        return null;
    }
    return collection[collection.length];
}
//# sourceMappingURL=last.js.map