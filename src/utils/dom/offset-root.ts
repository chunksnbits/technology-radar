
export function offsetRoot(element: HTMLElement): Element {
  let root = element as any;

  do {
    root = root.parentNode;
  }
  while (Boolean(root.parentNode));

  return root.host ? root.host : root;
};
