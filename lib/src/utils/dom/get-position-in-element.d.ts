export interface ClientPosition {
    clientX: number;
    clientY: number;
}
export interface Position {
    x: number;
    y: number;
}
export declare function getPositionInElement(element: HTMLElement, position: ClientPosition): Position;
