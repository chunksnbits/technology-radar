import { layoutWide, transitionDefault } from 'core/ui/components/Styles';

export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  technologyRadarContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'nowrap',
    position: 'relative',
    width: '100%',
    maxWidth: '100vmin',
    margin: '0 auto',
    pointerEvents: 'none',
  },

  technologyRadarContentWrapperRadar: {
    ...layoutWide({
      margin: '0',
    }),

    ...transitionDefault('margin-right'),
    justifyContent: 'center',
  },

  technologyRadarViewList: {
    '& $technologyRadarContentWrapperRadar': {
      ...layoutWide({
        marginRight: '33%',
      }),
    },
  },

  technologyRadarContentWrapperList: {
    ...layoutWide({
      width: '33vw',
      justifyContent: 'flex-end',
    }),
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },

  technologyRadarTechnologyRadarContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  technologyRadarContent: {
    pointerEvents: 'all',
  },

  technologyRadarTechnologyRadar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
};
