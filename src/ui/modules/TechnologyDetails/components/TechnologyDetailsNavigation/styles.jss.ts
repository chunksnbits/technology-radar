import { textColor } from '../../../../components/Styles';

export const styles = (theme: ApplicationTheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    left: 0,
    padding: 0,
    color: textColor(theme),
  },
  technologyDetailsNavigationAction: {
    minWidth: '40%',
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  technologyDetailsNavigationActionIcon: {
    width: '14px',
    height: '14px',
    fill: textColor(theme),
  },
  technologyDetailsNavigationActionLabel: {
    display: 'inline-block',
    color: textColor(theme),
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
});
