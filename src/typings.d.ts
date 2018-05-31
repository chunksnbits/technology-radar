
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

declare interface ApplicationConfig {
  application: ApplicationState;
  technologyRadar: TechnologyRadar;
}

declare interface BoundHandlers {
  [key: string]: Function;
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