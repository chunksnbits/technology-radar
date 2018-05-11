
// ----------------------------------------------------------------------------- Implementation
export function classNames(...values: string[]): string {
  return values.filter(value => Boolean(value)).join(' ');
}
