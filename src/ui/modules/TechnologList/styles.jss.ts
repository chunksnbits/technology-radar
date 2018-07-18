import { transitionDefault, layoutWide } from '../../components/Styles';

export const styles = (theme) => ({
  root: {
    ...layoutWide({
      background: theme.base,
      padding: '20px 10px 25px',
      maxWidth: '600px',
    }),

    ...transitionDefault('transform', { delay: '0.1s' }),

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    width: '100%',
    padding: '85px 5px 70px',
    WebkitOverflowScrolling: 'touch',
    background: theme.base,
  },

  technologyListItems: {
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },

  technologyListHidden: {
    ...layoutWide({
      transform: 'translateX(50vw)',
    }),
    transform: 'translateX(101vw)',
  },

  technologyListGroupItems: {
    padding: '5px 0 15px',
  },

  technologyListItemHidden: {
    display: 'none',
  },
});
