
// ----------------------------------------------------------------------------- Dependencies
import { LAYOUT_CLASSES } from '../LayoutProvider';

// ----------------------------------------------------------------------------- Implementation
export const layoutWide = (inherited: CssProperties) => ({
  [`.${ LAYOUT_CLASSES.large } &`]: inherited,
});
