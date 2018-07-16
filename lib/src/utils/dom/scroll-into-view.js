// ----------------------------------------------------------------------------- Helpers methods
function supportsScrollIntoView() {
    var browserBlacklist = {
        safari: function () { return /^((?!chrome|android).)*safari/i.test(navigator.userAgent); },
    };
    return !Object.values(browserBlacklist).some(function (testFnc) { return testFnc(); });
}
// ----------------------------------------------------------------------------- Implementation
export function scrollIntoView(element, options) {
    if (supportsScrollIntoView()) {
        element.scrollIntoView(options);
    }
}
//# sourceMappingURL=scroll-into-view.js.map