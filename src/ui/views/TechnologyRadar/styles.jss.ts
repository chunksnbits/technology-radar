import { typoDefault, remBaseSize, remSize, typoFontWeightLight } from '../../components/Styles';

export const styles = {
  '@global': {
    ':host, technology-radar': {
        ...typoDefault(),

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        position: 'relative',
        width: '100%',
        height: '100%',

        margin: '0',
        padding: '40px 0 50px',
        overflow: 'hidden',

        fontSize: `${ remBaseSize }px`,
    },

    'technology-radar > div': {
      height: '100%',
    },

    ':host > div': {
      height: '100%',
    },

    '.g-webcomponent-root, .g-styles-root, .g-layout': {
      height: '100%',
    },

    'html, body, technology-radar': {
      height: '100%',
      overflow: 'hidden',
    },

    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    'h1, h2, h3, h4, h5, h6, p, ul, li': {
      margin: '0',
      padding: '0',
    },

    ul: {
      listStyle: 'none',
    },

    'ul, li': {
      ...typoDefault(),
    },

    h1: {
      fontSize: remSize(48),
      fontWeight: typoFontWeightLight,
      textTransform: 'uppercase',
    },

    h3: {
      fontSize: remSize(16),
      fontWeight: typoFontWeightLight,
    },

    p: {
      fontSize: remSize(14),
      fontWeight: typoFontWeightLight,
    },
  },
};
