
export const styles = (theme: ApplicationTheme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  legendGroupSeparatorsSeparator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '141.421vmax', // sqrt(100^2 + 100^2)

    height: '1px',
    background: theme.accent || theme.primary,

    transformOrigin: 'center',
  },
});
