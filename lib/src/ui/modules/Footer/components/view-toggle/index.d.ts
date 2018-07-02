/// <reference types="react" />
export interface ViewToggleProps {
    className?: string;
    viewMode: ViewMode;
    onClick: () => void;
}
export declare const ViewToggle: ({ viewMode, className, onClick }: ViewToggleProps) => JSX.Element;
