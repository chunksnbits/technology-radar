
import { layoutWide, transitionDefault, zIndex, rgba, backgroundColor, textColor, stripUnit } from '../Styles';

const bottomSheetMargin = '5px';
const bottomSheetPadding = '15px';
const bottomSheetMaxWidth = '530px';
const bottomSheetNavigationActionSize = '48px';

export const styles = (theme: ApplicationTheme) => ({
  root: {
    ...layoutWide({
      alignItems: 'flex-end',
    }),

    ...transitionDefault('transform'),

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    maxHeight: '100%',
    zIndex: zIndex.bottomSheet,

    padding: bottomSheetMargin,

    transform: 'translate3d(0, 150%, 0)',
    pointerEvents: 'none',
  },

  rootActive: {
    transform: 'translate3d(0, 0, 0)',
  },

  content: {
    ...layoutWide({
      maxWidth: bottomSheetMaxWidth,
      maxHeight: `calc(100vh - ${ stripUnit(bottomSheetMargin) * 2 }px)`,
    }),

    display: 'flex',

    position: 'relative',
    left: 'auto',
    right: 'auto',
    height: '100%',
    zIndex: '1',

    margin: '0',
    padding: bottomSheetPadding,

    color: textColor(theme),
    background: rgba(backgroundColor(theme), 0.95),
    boxShadow: `0 0 10px 0 ${ rgba(theme.secondary, 0.5) }`,
    border: 0,
  },

  navigation: {
    position: 'absolute',

    top: '0',
    right: '0',
    zIndex: '2',

    padding: '5px',

    pointerEvents: 'none',
  },

  navigationAction: {
    height: bottomSheetNavigationActionSize,
    width: bottomSheetNavigationActionSize,
    minWidth: 0,
    margin: '1px 1px 0 0',

    borderRadius: bottomSheetNavigationActionSize,

    pointerEvents: 'all',

    background: rgba(theme.secondary, 0),

    '&:hover, &:focus': {
      background: rgba(theme.secondary, 0.3),
    },
  },

  navigationActionClose: {
    width: '48px',
    height: '48px',
    minWidth: '0',
    padding: '0',
  },

  navigationActionIcon: {
    width: '14px',
    height: '14px',
    fill: textColor(theme),
  },
});
