
declare interface CssProperties {
  [key: string]: string | number;
}

declare interface CssTransitionProperties {
  duration: string;
  timing?: string;
  delay?: string;
}

declare interface CssAnimationProperties {
  duration?: string;
  timing?: string;
  delay?: string;
  iterationCount?: number;
  direction?: string;
  fillMode?: string;
}
