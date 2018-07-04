export declare const groupIndicatorSize = "18px";
export declare const styles: (theme: ApplicationTheme) => {
    groupIndicator: {
        display: string;
        position: string;
        width: number;
        height: string;
        minWidth: string;
        minHeight: string;
        borderRadius: string;
        border: string;
        outline: string;
        background: string;
        '&::before': {
            content: string;
            position: string;
            top: string;
            right: string;
            bottom: string;
            left: string;
            zIndex: number;
            borderRadius: string;
            border: string;
            borderRightColor: string;
            opacity: number;
        };
    };
    groupIndicatorFocused: {
        borderWidth: string;
        '&:before': {
            top: string;
            right: string;
            bottom: string;
            left: string;
            borderWidth: string;
            opacity: number;
        };
    };
};
