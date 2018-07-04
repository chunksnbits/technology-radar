export declare const styles: (theme: ApplicationTheme) => {
    root: {
        display: string;
        flexDirection: string;
        justifyContent: string;
        alignItems: string;
        width: string;
        bottom: number;
        left: number;
        padding: number;
        color: string;
    };
    technologyDetailsNavigationAction: {
        minWidth: string;
        textAlign: string;
        justifyContent: string;
    };
    technologyDetailsNavigationActionIcon: {
        width: string;
        height: string;
        fill: string;
    };
    technologyDetailsNavigationActionLabel: {
        display: string;
        color: string;
    };
    technologyDetailsNavigationActionNext: {
        '& $technologyDetailsNavigationActionLabel': {
            marginRight: string;
        };
    };
    technologyDetailsNavigationActionPrev: {
        textAlign: string;
        justifyContent: string;
        '& $technologyDetailsNavigationActionLabel': {
            marginLeft: string;
        };
    };
};
