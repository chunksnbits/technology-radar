export declare const styles: (theme: ApplicationTheme) => {
    modalBackdrop: {
        position: string;
        top: number;
        left: number;
        right: number;
        bottom: number;
        pointerEvents: string;
        zIndex: number;
    };
    modalBase: {
        position: string;
        top: number;
        left: number;
        right: number;
        bottom: number;
        pointerEvents: string;
        zIndex: number;
    };
    '$modalDIalog[open]::backdrop': {
        position: string;
    };
    root: {
        display: string;
        flexDirection: string;
        justifyContent: string;
        position: string;
        left: number;
        bottom: number;
        width: string;
        height: string;
        maxHeight: string;
        padding: string;
        borderColor: string;
    };
    modalDialog: {
        transform: string;
        opacity: number;
        background: string;
    };
    '$modalDialog[open]': {
        position: string;
        display: string;
        padding: string;
        width: string;
        maxHeight: string;
        left: string;
        right: string;
        margin: number;
        overflow: string;
        border: number;
        pointerEvents: string;
        transform: string;
        transition: string;
    };
    modalSidebar: {
        top: number;
        right: number;
        bottom: number;
        left: string;
        width: string;
        height: string;
        maxHeight: string;
        margin: number;
        padding: number;
        border: number;
    };
    'modalSidebar $modalDialog[open]': {
        maxHeight: string;
        width: string;
        height: string;
    };
    modalNav: {
        position: string;
        top: number;
        right: number;
        zIndex: number;
        padding: string;
        pointerEvents: string;
    };
    modalContent: {
        position: string;
        width: string;
        height: string;
        overflow: string;
        overflowX: string;
        overflowY: string;
        zIndex: number;
    };
    modalNavAction: {
        pointerEvents: string;
    };
    modalNavActionClose: {
        width: string;
        height: string;
        minWidth: number;
        padding: number;
    };
    modalNavactionIcon: {
        width: string;
        height: string;
    };
};
