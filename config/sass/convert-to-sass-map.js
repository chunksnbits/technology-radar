
module.exports = function convertToSassMap(imported) {
  const values = Object.entries(imported).map(([key, value]) =>  {
    if (Array.isArray(value)) {
      return `${key}: (${value.join(',')})`;
    }

    if (typeof value === 'object') {
      return `${key}: ${convertToSassMap(value)}`;
    }

    return `${key}: ${value}`;
  });

  return `(${values.join(',\n')})`;
}
