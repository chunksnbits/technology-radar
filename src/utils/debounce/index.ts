
// ----------------------------------------------------------------------------- Implementation
const handlers: { [key: string]: any } = {};

export function debounce(key: string, handler: Function, timeout: number = 100): () => void {
  clearTimeout(handlers[key]);

  handlers[key] = setTimeout(() => handler(), timeout);

  return () => {
    clearTimeout(handlers[key]);
  };
}
