
// ----------------------------------------------------------------------------- Configuration
export interface ClientPosition {
  clientX: number;
  clientY: number;
}

export interface Position {
  x: number;
  y: number;
}

// ----------------------------------------------------------------------------- Implementation
export function getPositionInElement(element: HTMLElement, position: ClientPosition): Position {
  const rect = element.getBoundingClientRect();

  return {
    x: position.clientX - rect.left,
    y: position.clientY - rect.top,
  };
}