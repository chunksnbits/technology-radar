
// ----------------------------------------------------------------------------- Implementation
export function calculateTechnologyRotationDegrees(
    technology: Technology,
    groups: Group[],
    technologies: Technology[],
  ): number {

  const index = calculateIndexInLevelAndGroup(technologies, technology);
  const count = calculateNumberOfItemsForLevelAndGroup(technologies, technology);
  const group = findGroupForTechnology(groups, technology);

  // 1. Rotate item to it's group
  const groupBaseAngleDegree = 360 / groups.length;
  const groupRotationDegrees = calculateGroupRotationDegrees(group, groups);

  // 2. Rotate to item within group (compared to other items within that group + level segment).
  //
  // uses (count + 1) to ensure some padding left + right.
  const itemBaseAngleDegree = groupBaseAngleDegree / (count + 1);
  const itemRotationDegree = index * itemBaseAngleDegree + 0.5 * itemBaseAngleDegree;

  //
  // 3. Add up for final rotation
  //
  return (groupRotationDegrees + itemRotationDegree + 0.5 * itemBaseAngleDegree) % 360;
}

export function calculateGroupRotationDegrees(group: Group, groups: Group[]): number {
  const groupBaseAngleDegree = 360 / groups.length;
  const groupIndex = findGroupIndex(groups, group);

  return groupIndex * groupBaseAngleDegree;
}

export function calculateItemOffsetPercent(
  technology: Technology,
  technologies: Technology[],
  settings: TechnologyRadarSettings,
): number {
  const { innerRadiusPercent, outerRadiusPercent } = settings;

  const level = technology.level;
  const maxLevel = calculateMaxLevel(technologies);

  const count = calculateNumberOfItemsForLevelAndGroup(technologies, technology);
  const index = calculateIndexInLevelAndGroup(technologies, technology);

  // const { index, count, level, maxLevel, innerRadiusPercent, outerRadiusPercent } = transformProperties;

  // Invert level, i.e., the greater the level the nearer the item is to the center
  const invertedLevel = (maxLevel + 1) - level;

  // 1. Translate item to it's level
  //
  const levelBaseTranslationPercent = (outerRadiusPercent - innerRadiusPercent) / maxLevel;
  const levelShiftPercent = (invertedLevel - 1) * levelBaseTranslationPercent;

  // 2. Add some variation, i.e., add some offset depending on index
  const centerShiftPercent = 0.5 * levelBaseTranslationPercent;
  // Add some variation with alternating between [-1, 1] to keep items from overlapping
  const variation = count < 2 ? 0 : (index % 2 === 0 ? 1 : -1);
  const translationVariationPercent = variation * 0.25 * centerShiftPercent;

  //
  // Final translation
  //
  return innerRadiusPercent + levelShiftPercent + centerShiftPercent + translationVariationPercent;
}

// ----------------------------------------------------------------------------- Helpers methods
export function calculateMaxLevel(technologies: Technology[]): number {
  return technologies.reduce((result, technology) => Math.max(result, technology.level), 0);
}
export function findGroupIndex(groups: Group[], group: Group): number {
  return groups.findIndex(acc => acc.id === group.id);
}

export function calculateNumberOfItemsForLevelAndGroup(technologies: Technology[], technology: Technology): number {
  return technologies.filter(acc => acc.groupId === technology.groupId && acc.level === technology.level).length;
}

export function calculateIndexInLevelAndGroup(technologies: Technology[], technology: Technology): number  {
  const grouped = technologies.filter(acc => acc.groupId === technology.groupId && acc.level === technology.level);
  return grouped.findIndex(acc => acc.id === technology.id);
}

export function findGroupForTechnology(groups: Group[], technology: Technology): Group {
  return groups.find(acc => acc.id === technology.groupId);
}

export function findTechnologiesForGroupAndLevel(technologies: Technology[], groupId: string, level: number): Technology[] {
  return technologies.filter(acc => acc.groupId === groupId && acc.level === level);
}

export function indexOfTehnology(technologies: Technology[], technology: Technology): number {
  return technologies.findIndex(acc => acc.id === technology.id);
}
