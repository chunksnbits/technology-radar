export declare const styles: (theme: ApplicationTheme) => {
    root: {
        position: string;
        bottom: number;
        left: number;
        right: number;
        padding: string;
        pointerEvents: string;
        color: string;
    };
    footerActions: {
        display: string;
        flexDirection: string;
        justifyContent: string;
        marginBottom: string;
    };
    footerActionIcon: {
        width: string;
        height: string;
        marginRight: string;
    };
    footerAction: {
        display: string;
        flexDirection: string;
        alignItems: string;
        opacity: number;
        pointerEvents: string;
        color: string;
        backgroundColor: string;
        '&:hover': {
            opacity: number;
            backgroundColor: string;
            color: string;
            span: {
                color: string;
            };
            '$footerActionIcon': {
                fill: string;
            };
        };
        transition: string;
    };
};
