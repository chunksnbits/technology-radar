import { zIndex } from '../Styles';

export const styles = (theme: ApplicationTheme) => ({
  globalBackgroundAnchor: {
    position: 'absolute',

    top: '0',
    left: '0',
    width: '100%',
    height: '100%',

    zIndex: zIndex.globalBackgroundAnchor,

    background: theme.base,
    pointerEvents: 'none',
  },

  globalBackgroundAuto: {
    zIndex: zIndex.globalBackgroundAbove,
  },

  globalBackgroundAbove: {
    zIndex: zIndex.globalBackgroundAbove,
  },

  globalBackgroundBelow: {
    zIndex: zIndex.globalBackgroundBelow,
  },
});
