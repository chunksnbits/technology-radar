export declare function stripUnit(value: string | number): number;
export declare function remSize(size: number): string;
export declare const remBaseSize = 14;
export declare const typoFontWeightLight = "300";
export declare const typoFontWeightRegular = "400";
export declare const typoFontWeightBold = "700";
export declare const typoFontFamily = "'Roboto', 'Helvetica Neue', Helvetica, Arial, system, sansSerif";
export declare const typoFontSize: string;
export declare const typoFontWeight = "300";
export declare const typoFontSizeSmall: string;
export declare const typoFontSizeDefault: string;
export declare const typoFontSizeSectionHeading: string;
export declare const typoFontSizeBlockHeading: string;
export declare const typoFontSizeCopyLarge: string;
export declare const typoFontSizeCopy: string;
export declare const typoLineHeightRatio = 1.61803399;
export declare const responsiveSize: (size: string) => string;
export declare const typoDefault: () => {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: number;
};
export declare const typoSectionHeading: () => {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: number;
};
export declare const typoBlockHeading: () => {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: number;
};
export declare const typoGroupHeading: () => {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: number;
};
export declare const typoCopy: () => {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    lineHeight: number;
};
export declare const typoCopySmall: () => {
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    lineHeight: number;
};
