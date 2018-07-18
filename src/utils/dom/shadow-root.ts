
export function shadowRoot(element: HTMLElement): Element {
  let root = element as any;

  do {
    root = root.parentNode;
  }
  while (root && !Boolean(root.host));

  return root ? root.host : null;
};

