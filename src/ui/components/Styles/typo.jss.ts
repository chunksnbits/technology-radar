
// ----------------------------------------------------------------------------- Helpers methods
export function stripUnit(value: string | number): number {
  return Number(value.toString().replace(/[^0-9.]/g, ''));
};

export function remSize(size: number) {
  return `${ stripUnit(size) / remBaseSize }rem`;
};

// ----------------------------------------------------------------------------- Configuration
// The base size to be set as rem base.
// All subsequent remSizes will be measured relative
// to this.
//
export const remBaseSize = 14;

export const typoFontWeightLight = '300';
export const typoFontWeightRegular = '400';
export const typoFontWeightBold = '700';

export const typoFontFamily = `'Roboto', 'Helvetica Neue', Helvetica, Arial, system, sansSerif`;
export const typoFontSize = remSize(14);
export const typoFontWeight = typoFontWeightLight;

export const typoFontSizeSmall = remSize(11);
export const typoFontSizeDefault = remSize(14);
export const typoFontSizeSectionHeading = remSize(34);
export const typoFontSizeBlockHeading = remSize(20);
export const typoFontSizeCopyLarge = remSize(18);
export const typoFontSizeCopy = remSize(14);

export const typoLineHeightRatio = 1.61803399;

// ----------------------------------------------------------------------------- Implementation
// Converts a given fontSize to vieweport related size.
export const responsiveSize = (size: string) =>{
  if (size.includes('rem')) {
    return `${ stripUnit(size) * remBaseSize }vmin`;
  }

  return `${ stripUnit(size) }vmin`;
}

export const typoDefault = () => ({
  fontFamily: typoFontFamily,
  fontWeight: typoFontWeightLight,

  fontSize: typoFontSizeDefault,
  lineHeight: typoLineHeightRatio,
});

export const typoSectionHeading = () => ({
  fontFamily: typoFontFamily,
  fontWeight: typoFontWeightRegular,

  fontSize: typoFontSizeSectionHeading,
  lineHeight: typoLineHeightRatio,
});

export const typoBlockHeading = () => ({
  fontFamily: typoFontFamily,
  fontWeight: typoFontWeightRegular,

  fontSize: typoFontSizeBlockHeading,
  lineHeight: typoLineHeightRatio,
});

export const typoGroupHeading = () => ({
  fontFamily: typoFontFamily,
  fontWeight: typoFontWeightRegular,

  fontSize: typoFontSizeCopy,
  lineHeight: typoLineHeightRatio,
});

export const typoCopy = () => ({
  fontFamily: typoFontFamily,
  fontWeight: typoFontWeightLight,

  fontSize: typoFontSizeCopy,
  lineHeight: typoLineHeightRatio,
});

export const typoCopySmall = () => ({
  ...typoDefault(),

  fontSize: typoFontSizeSmall,
});
