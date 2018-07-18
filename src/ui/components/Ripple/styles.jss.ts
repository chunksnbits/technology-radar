
import { animationDefault } from '../Styles';

export const styles = (theme: ApplicationTheme) => ({
  '@keyframes ripple-effect': {
    '0%': {
      transform: 'translate3d(0%, 0%, 0) scale3d(0, 0, 1)',
      opacity: 0,
    },
    '50%': {
      transform: 'translate3d(0%, 0%, 0) scale3d(2, 2, 1)',
      opacity: 0.85,
    },
    '100%': {
      transform: 'translate3d(0%, 0%, 0) scale3d(4.5, 4.5, 1)',
      opacity: 0,
    },
  },

  root: {
    position: 'relative',
  },

  ripple: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    border: `1px solid ${ theme.primary }`,
    width: '20px',
    height: '20px',
    borderRadius: '20px',
    opacity: 0,
    borderColor: theme.primary,
  },

  rippleWillChange: {
    ripple: {
      willChange: 'transform, opacity',
    },
  },

  rippleActive: {
    ripple: {
      ...animationDefault('ripple-effect'),
    },
  },
});
