
// ----------------------------------------------------------------------------- Dependencies
export const LAYOUT_BASE_CLASS = 'g-layout';

export const LAYOUT_CLASSES = {
  small: `${ LAYOUT_BASE_CLASS }--small`,
  medium: `${ LAYOUT_BASE_CLASS }--medium`,
  large: `${ LAYOUT_BASE_CLASS }--large`,
};

// ----------------------------------------------------------------------------- Implementation
export const layoutWide = (inherited: CssProperties) => ({
  [`.${ LAYOUT_CLASSES.large } &`]: inherited,
});
