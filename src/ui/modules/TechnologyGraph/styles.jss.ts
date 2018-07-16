import { layoutWide, transitionDefault, stripUnit, rgba } from 'core/ui/components/Styles';

const technologyGraphCenterCircleSize = '20px';

export const styles = (theme: ApplicationTheme) => ({
  root: {
    ...layoutWide({
      padding: '5.25vmin',
    }),

    ...transitionDefault('transform', { delay: '0s' }),

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7.25vmin',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: `translate(
        ${ -0.5 * stripUnit(technologyGraphCenterCircleSize) }px,
        ${ -0.5 * stripUnit(technologyGraphCenterCircleSize) }px
      )`,
      width: technologyGraphCenterCircleSize,
      height: technologyGraphCenterCircleSize,
      borderRadius: technologyGraphCenterCircleSize,
      zIndex: 2,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: rgba(theme.primary, 0.9),
      background: theme.base,
    },
  },

  technologyGraphWillChange: {
    willChange: 'transform',
  },

  technologyGraphContent: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  technologyGraphTechnologies: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  technologyGraphLegend: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    pointerEvents: 'none',
  },
});
