
export const groupIndicatorSize = 12;

export const itemSize = (theme: ApplicationTheme) => {
  return `${ groupIndicatorSize + 2 * Math.max(theme.itemBorderSize, 1) }px`;
}

const borderWidth = (theme: ApplicationTheme) => {
  return theme.itemBorderSize ? `${ Math.max(theme.itemBorderSize, 1) }px` : '2px';
}

const borderWidthHighlight = (theme: ApplicationTheme) => {
  return theme.itemBorderSize ? `${ Math.max(theme.itemBorderSize, 1) }px` : '2px';
}

const borderWidthActive = (theme: ApplicationTheme) => {
  return theme.itemBorderSize ? `${ Math.max(theme.itemBorderSize + 2, 1) }px` : '4px';
}

const borderWidthActiveHighlight = (theme: ApplicationTheme) => {
  return theme.itemBorderSize ? `${  Math.max(theme.itemBorderSize + 2, 1) }px` : '4px';
}

const offsetHighlight = (theme: ApplicationTheme) => {
  return theme.itemBorderSize ? `${ -1 * Math.max(theme.itemBorderSize, 1) }px` : '-2px';
}

const offsetHighlightActive = (theme: ApplicationTheme) => {
  return theme.itemBorderSize ? `${ -1 * Math.max(theme.itemBorderSize + 2, 1) }px` : '-4px';
}

export const styles = (theme: ApplicationTheme) => ({

  groupIndicator: {
    display: 'inlineBlock',
    position: 'relative',
    width: theme.itemBorderSize,
    height: itemSize(theme),
    minWidth: itemSize(theme),
    minHeight: itemSize(theme),
    borderRadius: itemSize(theme),
    border: `${ borderWidth(theme) } solid transparent`,
    outline: 'none',
    background: theme.base,

    '&::before': {
      content: '""',
      position: 'absolute',
      top: offsetHighlight(theme),
      right: offsetHighlight(theme),
      bottom: offsetHighlight(theme),
      left: offsetHighlight(theme),
      zIndex: 2,
      borderRadius: itemSize(theme),
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
