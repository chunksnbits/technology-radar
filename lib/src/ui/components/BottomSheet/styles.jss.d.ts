export declare const styles: (theme: ApplicationTheme) => {
    root: {
        display: string;
        flexDirection: string;
        justifyContent: string;
        alignItems: string;
        position: string;
        left: string;
        bottom: string;
        width: string;
        maxHeight: string;
        zIndex: number;
        padding: string;
        transform: string;
        pointerEvents: string;
        transition: string;
    };
    rootActive: {
        transform: string;
    };
    content: {
        display: string;
        position: string;
        left: string;
        right: string;
        height: string;
        zIndex: string;
        margin: string;
        padding: string;
        color: string;
        background: string;
        border: string;
    };
    navigation: {
        position: string;
        top: string;
        right: string;
        zIndex: string;
        padding: string;
        pointerEvents: string;
    };
    navigationAction: {
        pointerEvents: string;
        minWidth: number;
        height: string;
        width: string;
        borderRadius: string;
        '&, &:hover, &:focus': {
            background: string;
        };
    };
    navigationActionClose: {
        width: string;
        height: string;
        minWidth: string;
        padding: string;
    };
    navigationActionIcon: {
        width: string;
        height: string;
        fill: string;
    };
};
