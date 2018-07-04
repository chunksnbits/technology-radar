import {
  typoFontWeightLight,
  typoCopy,
  layoutWide,
  typoGroupHeading,
  typoBlockHeading,
  typoFontWeightRegular,
  zIndex,
  typoCopySmall,
  rgba,
} from '../../components/Styles';

export const styles = (theme) =>  ({
  root: {
    ...layoutWide({
      background: 'none',
    }),

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: zIndex.header,
    pointerEvents: 'none',
  },

  headerAppTitle: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    padding: '10px 20px 10px',
    pointerEvents: 'all',
    color: theme.base,

    '&:hover': {
      background: rgba(theme.base, 0.7),
    },
  },

  headerLogo: {
    display: 'inline-flex',
    width: '6.2vmin',
  },

  headerName: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 4px',
    color: theme.primary,
  },

  headerTitle: {
    ...layoutWide({
      ...typoBlockHeading(),

      lineHeight: 1,
    }),

    ...typoGroupHeading(),

    display: 'inline-block',
    fontWeight: typoFontWeightLight,
    lineHeight: 1,
  },

  headerSubtitle: {
    ...layoutWide({
      ...typoCopy(),
    }),

    ...typoCopySmall(),

    fontWeight: typoFontWeightRegular,
    textTransform: 'none',
  },
});
