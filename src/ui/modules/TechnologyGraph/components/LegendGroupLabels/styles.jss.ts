import { layoutWide, remSize, typoDefault, zIndex } from '../../../../components/Styles';

export const styles = (theme: ApplicationTheme) => ({
  root: {
    ...layoutWide({
      margin: '-2.7vmin',
    }),

    position: 'relative',
    margin: '-3.5vmin',
    zIndex: zIndex.technoloogyRadarLabels,
  },

  legendGroupLabelsGroup: {
    transformOrigin: 'center',
  },

  legendGroupLabelsElement: {
    overflow: 'visible',
  },

  legendGroupLabelsLabel: {
    ...layoutWide({
      fontSize: remSize(1.95),
    }),

    ...typoDefault(),

    fill: theme.primary,

    fontSize: remSize(2.5),
    fontWeight: 'lighter',
    textAnchor: 'middle',
    transformOrigin: 'center',
    overflow: 'visible',

    pointerEvents: 'all',

    cursor: 'pointer',
  },
});
