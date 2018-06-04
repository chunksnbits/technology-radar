
export const isObject = (collection: any) => {
  return typeof collection === 'object' && collection !== null;
}

export const merge = (collection: any, other: any): any => {
  if (!isObject(collection) && isObject(other)) {
    return other;
  }

  if (isObject(collection) && !isObject(other)) {
    return collection;
  }

  return Object.entries(other).reduce((result, [key, value]) => {
    return Object.assign(result, { [key]: value });
  }, { ...collection });
}

export const mergeAll = (...args: object[]) => {
  if (!Array.isArray(args)) {
    return {};
  }

  return args.reduce((result, acc) => merge(result, acc), {});
};
