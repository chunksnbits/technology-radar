import { transitionDefault, rgba } from '../../components/Styles';

export const styles = (theme: ApplicationTheme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 5px 5px',
    pointerEvents: 'none',

    color: theme.base,
  },

  footerActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: '12px',
  },

  footerActionIcon: {
    width: '18px',
    height: '18px',
    marginRight: '12px',
  },

  footerAction: {
    ...transitionDefault('color', 'backgroundColor'),

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.8,
    pointerEvents: 'all',
    color: theme.primary,
    backgroundColor: rgba(theme.accent || theme.primary, 0),

    '&:hover': {
      opacity: 1,
      backgroundColor: rgba(theme.accent || theme.primary, 1),
      color: theme.base,

      span: {
        color: theme.base,
      },

      '$footerActionIcon': {
        fill: theme.base,
      },
    },
  },
});
