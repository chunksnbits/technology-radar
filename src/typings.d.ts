


declare interface ApplicationConfig {
  title?: string;
  subtitle?: string;
  logo?: string;
}

declare interface ApplicationData {
  technologies?: Technology[];
  groups?: Group[];
  levels?: Level[];
}

declare interface TechnologyRadarSettings {
  innerRadiusPercent: number;
  outerRadiusPercent: number;
}

declare interface LayoutBreakpoints {
  small: number;
  medium: number;
  large: number;
}

declare interface ApplicationTheme {
  itemBorderSize: number;
  base: string;
  primary: string;
  secondary: string;
  accent: string;
  backgroundTextContent?: string;
  textContent?: string;
}

declare interface ApplicationLayout {
  breakpoints: LayoutBreakpoints;
  technologyRadar: TechnologyRadarSettings;
}

declare interface Technology {
  id?: string;
  name: string;
  description?: string;
  logo?: string;
  groupId: string;
  level: number;
}

declare interface Group {
  id?: string;
  group?: number;
  name: string;
  description?: string;
  color?: string;
}

declare interface Level {
  id?: string;
  name: string;
}

declare interface ScreenSize {
  width: number;
  height: number;
}

declare type DeviceOrientation = 'landscape' | 'portrait';

declare interface BoundHandlers<T> {
  [key: string]: T;
}

declare interface BoundSelectors<S, T> {
  [key: string]: (value: S) => T;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.scss" {
  const value: any;
  export default value;
}

declare module "public/*.svg" {
  const value: string;
  export default value;
}

declare module "public/application-config.json" {
  const value: ApplicationConfig;
  export default value;
}

declare module "public/data.json" {
  const value: ApplicationData;
  export default value;
}

declare module "public/theme.json" {
  const value: ApplicationTheme;
  export default value;
}

declare module "public/layout.json" {
  const value: ApplicationLayout;
  export default value;
}

declare interface CssCoreStyle {
  transform?: string;
  transformOrigin?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  position?: string;
}