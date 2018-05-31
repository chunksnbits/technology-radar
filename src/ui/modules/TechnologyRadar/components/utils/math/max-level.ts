
// ----------------------------------------------------------------------------- Implementation
export function calculateMaxLevel(technologies: Technology[]): number {
  return technologies.reduce((result, technology) => Math.max(result, technology.level), 0);
}
