
// ----------------------------------------------------------------------------- Helpers methods
function supportsScrollIntoView() {
  const browserBlacklist = {
    safari: () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  }
  return !Object.values(browserBlacklist).some(testFnc => testFnc());
}

// ----------------------------------------------------------------------------- Implementation
export function scrollIntoView(element: HTMLElement, options?: ScrollIntoViewOptions): void {
  if (supportsScrollIntoView()) {
    element.scrollIntoView(options);
  }
}
