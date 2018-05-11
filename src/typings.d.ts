
declare interface Technology {
  id?: string;
  name: string;
  description?: string;
  logo?: string;
  group: number;
  groupId: string;
  level: number;
}

declare interface Group {
  id?: string;
  group?: number;
  name: string;
  description?: string;
}

declare interface Data {
  technologies: Technology[];
  groups: Group[];
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "public/data.json" {
  const value: Data;
  export default value;
}