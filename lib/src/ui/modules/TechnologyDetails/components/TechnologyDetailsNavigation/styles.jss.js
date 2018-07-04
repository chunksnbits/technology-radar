export var styles = function (theme) { return ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        left: 0,
        padding: 0,
        color: theme.primary,
    },
    technologyDetailsNavigationAction: {
        minWidth: '40%',
        textAlign: 'right',
        justifyContent: 'flex-end',
    },
    technologyDetailsNavigationActionIcon: {
        width: '14px',
        height: '14px',
        fill: theme.primary,
    },
    technologyDetailsNavigationActionLabel: {
        display: 'inline-block',
        color: theme.primary,
    },
    technologyDetailsNavigationActionNext: {
        '& $technologyDetailsNavigationActionLabel': {
            marginRight: '10px',
        },
    },
    technologyDetailsNavigationActionPrev: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        '& $technologyDetailsNavigationActionLabel': {
            marginLeft: '10px',
        },
    },
}); };
//# sourceMappingURL=styles.jss.js.map