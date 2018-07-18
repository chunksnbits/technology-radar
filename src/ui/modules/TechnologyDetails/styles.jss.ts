import { animationDefault, typoBlockHeading, typoCopy, textColor } from '../../components/Styles';

const technologyDetailsColorSize = '14px';

export const styles = (theme: ApplicationTheme) => ({
  '@keyframes logo-appear': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: '0.75',
    },
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    color: textColor(theme),
  },

  technologyDetailsActive: {
    pointerEvents: 'all',
  },

  technologyDetailsLogo: {
    ...animationDefault('logo-appear', { delay: '0.1s' }),

    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'scale(1.25) rotateZ(-3deg) translateY(5%)',
    pointerEvents: 'none',
  },

  technologyDetailsContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflow: 'auto',
  },

  technologyDetailsNavigation: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
  },

  technologyDetailsName: {
    ...typoBlockHeading(),

    display: 'flex',
  },

  technologyDetailsGroupName: {
    color: textColor(theme),
  },

  technologyDetailsGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4px',
  },

  technologyDetailsDescription: {
    ...typoCopy(),

    marginTop: '15px',
    paddingBottom: '10px',
    userSelect: 'none',
  },

  technologyDetailsGroupColor: {
    display: 'inline-block',
    width: technologyDetailsColorSize,
    height: technologyDetailsColorSize,
    border: '3px solid transparent',
    borderRadius: technologyDetailsColorSize,
    marginRight: '10px',
  },
})
