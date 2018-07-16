
// ----------------------------------------------------------------------------- Implementation
export function offsetRoot(element: HTMLElement): Element | Window {
  let root = element as any;

  do {
    root = root.parentNode;
  }
  while (Boolean(root.parentNode));

  if (Boolean(root.host)) {
    return root.host;
  }

  return window;
};
