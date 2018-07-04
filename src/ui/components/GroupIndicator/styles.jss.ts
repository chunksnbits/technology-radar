
export const groupIndicatorSize = '18px';

const borderWidth = (theme: ApplicationTheme) => {
  return theme.itemSize ? `${ Math.max(theme.itemSize, 1) }px` : '2px';
}

const borderWidthHighlight = (theme: ApplicationTheme) => {
  return theme.itemSize ? `${ Math.max(theme.itemSize, 1) }px` : '2px';
}

const borderWidthActive = (theme: ApplicationTheme) => {
  return theme.itemSize ? `${ Math.max(theme.itemSize + 2, 1) }px` : '4px';
}

const borderWidthActiveHighlight = (theme: ApplicationTheme) => {
  return theme.itemSize ? `${  Math.max(theme.itemSize + 2, 1) }px` : '4px';
}

const offsetHighlight = (theme: ApplicationTheme) => {
  return theme.itemSize ? `${ -1 * Math.max(theme.itemSize, 1) }px` : '-2px';
}

const offsetHighlightActive = (theme: ApplicationTheme) => {
  return theme.itemSize ? `${ -1 * Math.max(theme.itemSize + 2, 1) }px` : '-4px';
}

export const styles = (theme: ApplicationTheme) => ({

  groupIndicator: {
    display: 'inlineBlock',
    position: 'relative',
    width: theme.itemSize,
    height: groupIndicatorSize,
    minWidth: groupIndicatorSize,
    minHeight: groupIndicatorSize,
    borderRadius: groupIndicatorSize,
    border: `${ borderWidth(theme) } solid transparent`,
    outline: 'none',
    background: 'none',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: offsetHighlight(theme),
      right: offsetHighlight(theme),
      bottom: offsetHighlight(theme),
      left: offsetHighlight(theme),
      zIndex: 2,
      borderRadius: groupIndicatorSize,
      border: `${ borderWidthHighlight(theme) } solid transparent`,
      borderRightColor: 'rgba(255, 255, 255, 1.0)',
      opacity: 0.5,
    },
  },

  groupIndicatorFocused: {
    borderWidth: borderWidthActive(theme),

    '&:before': {
      top: offsetHighlightActive(theme),
      right: offsetHighlightActive(theme),
      bottom: offsetHighlightActive(theme),
      left: offsetHighlightActive(theme),
      borderWidth: borderWidthActiveHighlight(theme),
      opacity: 0.85,
    },
  },
});
