var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// ----------------------------------------------------------------------------- Helpers methods
export function stripUnit(value) {
    return Number(value.toString().replace(/[^0-9.]/g, ''));
}
;
export function remSize(size) {
    return stripUnit(size) / remBaseSize + "rem";
}
;
// ----------------------------------------------------------------------------- Configuration
// The base size to be set as rem base.
// All subsequent remSizes will be measured relative
// to this.
//
export var remBaseSize = 14;
export var typoFontWeightLight = '300';
export var typoFontWeightRegular = '400';
export var typoFontWeightBold = '700';
export var typoFontFamily = "'Roboto', 'Helvetica Neue', Helvetica, Arial, system, sansSerif";
export var typoFontSize = remSize(14);
export var typoFontWeight = typoFontWeightLight;
export var typoFontSizeSmall = remSize(11);
export var typoFontSizeDefault = remSize(14);
export var typoFontSizeSectionHeading = remSize(34);
export var typoFontSizeBlockHeading = remSize(20);
export var typoFontSizeCopyLarge = remSize(18);
export var typoFontSizeCopy = remSize(14);
export var typoLineHeightRatio = 1.61803399;
// ----------------------------------------------------------------------------- Implementation
// Converts a given fontSize to vieweport related size.
export var responsiveSize = function (size) {
    if (size.includes('rem')) {
        return stripUnit(size) * remBaseSize + "vmin";
    }
    return stripUnit(size) + "vmin";
};
export var typoDefault = function () { return ({
    fontFamily: typoFontFamily,
    fontWeight: typoFontWeightLight,
    fontSize: typoFontSizeDefault,
    lineHeight: typoLineHeightRatio,
}); };
export var typoSectionHeading = function () { return ({
    fontFamily: typoFontFamily,
    fontWeight: typoFontWeightRegular,
    fontSize: typoFontSizeSectionHeading,
    lineHeight: typoLineHeightRatio,
}); };
export var typoBlockHeading = function () { return ({
    fontFamily: typoFontFamily,
    fontWeight: typoFontWeightRegular,
    fontSize: typoFontSizeBlockHeading,
    lineHeight: typoLineHeightRatio,
}); };
export var typoGroupHeading = function () { return ({
    fontFamily: typoFontFamily,
    fontWeight: typoFontWeightRegular,
    fontSize: typoFontSizeCopy,
    lineHeight: typoLineHeightRatio,
}); };
export var typoCopy = function () { return ({
    fontFamily: typoFontFamily,
    fontWeight: typoFontWeightLight,
    fontSize: typoFontSizeCopy,
    lineHeight: typoLineHeightRatio,
}); };
export var typoCopySmall = function () { return (__assign({}, typoDefault(), { fontSize: typoFontSizeSmall })); };
//# sourceMappingURL=typo.jss.js.map