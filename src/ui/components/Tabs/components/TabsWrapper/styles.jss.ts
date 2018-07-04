
import { transitionDefault } from '../../../Styles';

export const styles = (theme: ApplicationTheme) => ({
  root: {
    position: 'relative',
    height: '100%',
    overflow: 'auto',
  },

  tabsWrapperHeader: {
    background: theme.base,
  },

  '$tabsWrapperFixed $tabsWrapperHeader': {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',

    zIndex: 1,
  },

  '$tabsWrapperSticky $tabsWrapperHeader': {
    position: 'sticky',
    top: 0,
    left: 0,

    width: '100%',

    zIndex: 1,

  },

  tabsWrapperBody: {
    ...transitionDefault('transform'),

    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
  },
});
