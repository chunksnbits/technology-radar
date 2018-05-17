
// ----------------------------------------------------------------------------- Implementation
export function last(collection: any[]) {
  if (!Boolean(collection) || typeof collection.length !== 'number') {
    return null;
  }

  return collection[collection.length];
}
