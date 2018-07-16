import { layoutWide, typoCopySmall, typoCopy, typoFontWeightBold } from '../../../../components/Styles';

export const styles = (theme) => ({
  root: {
    borderLeft: '1px solid transparent',
    cursor: 'pointer',
    height: 'auto',
  },

  technologyListEntryButton: {
    justifyContent: 'flex-start',
  },

  technologyListEntryLabel: {
    ...layoutWide({
      ...typoCopySmall(),
    }),

    ...typoCopy(),

    display: 'block',
    width: '100%',
    textAlign: 'left',
    color: theme.primary,
  },

  technologyListEntryFocused: {
    '$technologyListEntryLabel': {
      fontWeight: typoFontWeightBold,
    },
    borderColor: theme.primary,
  },
  technologyListEntryGroupIndicator: {
    marginRight: '10px',
  },
});
