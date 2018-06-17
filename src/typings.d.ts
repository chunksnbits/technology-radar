
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

declare interface ApplicationConfig {
  application: ApplicationState;
  technologyRadar: TechnologyRadar;
}

declare interface ApplicationTheme {
  breakpoints: { [key: string]: number };
  colors: { [key: string]: string };
}

declare interface BoundHandlers<T> {
  [key: string]: T;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.scss" {
  const value: any;
  export default value;
}

declare module "public/data.json" {
  const value: ApplicationConfig;
  export default value;
}

declare module "public/theme.json" {
  const value: ApplicationTheme;
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