"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Implementation
function calculateTechnologyRotationDegrees(technology, groups, technologies) {
    var index = calculateIndexInLevelAndGroup(technologies, technology);
    var count = calculateNumberOfItemsForLevelAndGroup(technologies, technology);
    var group = findGroupForTechnology(groups, technology);
    // 1. Rotate item to it's group
    var groupBaseAngleDegree = 360 / groups.length;
    var groupRotationDegrees = calculateGroupRotationDegrees(group, groups);
    // 2. Rotate to item within group (compared to other items within that group + level segment).
    //
    // uses (count + 1) to ensure some padding left + right.
    var itemBaseAngleDegree = groupBaseAngleDegree / (count + 1);
    var itemRotationDegree = index * itemBaseAngleDegree + 0.5 * itemBaseAngleDegree;
    //
    // 3. Add up for final rotation
    //
    return (groupRotationDegrees + itemRotationDegree + 0.5 * itemBaseAngleDegree) % 360;
}
exports.calculateTechnologyRotationDegrees = calculateTechnologyRotationDegrees;
function calculateGroupRotationDegrees(group, groups) {
    var groupBaseAngleDegree = 360 / groups.length;
    var groupIndex = findGroupIndex(groups, group);
    return groupIndex * groupBaseAngleDegree;
}
exports.calculateGroupRotationDegrees = calculateGroupRotationDegrees;
function calculateItemOffsetPercent(technology, technologies, settings) {
    var innerRadiusPercent = settings.innerRadiusPercent, outerRadiusPercent = settings.outerRadiusPercent;
    var level = technology.level;
    var maxLevel = calculateMaxLevel(technologies);
    var count = calculateNumberOfItemsForLevelAndGroup(technologies, technology);
    var index = calculateIndexInLevelAndGroup(technologies, technology);
    // const { index, count, level, maxLevel, innerRadiusPercent, outerRadiusPercent } = transformProperties;
    // Invert level, i.e., the greater the level the nearer the item is to the center
    var invertedLevel = (maxLevel + 1) - level;
    // 1. Translate item to it's level
    //
    var levelBaseTranslationPercent = (outerRadiusPercent - innerRadiusPercent) / maxLevel;
    var levelShiftPercent = (invertedLevel - 1) * levelBaseTranslationPercent;
    // 2. Add some variation, i.e., add some offset depending on index
    var centerShiftPercent = 0.5 * levelBaseTranslationPercent;
    // Add some variation with alternating between [-1, 1] to keep items from overlapping
    var variation = count < 2 ? 0 : (index % 2 === 0 ? 1 : -1);
    var translationVariationPercent = variation * 0.25 * centerShiftPercent;
    //
    // Final translation
    //
    return innerRadiusPercent + levelShiftPercent + centerShiftPercent + translationVariationPercent;
}
exports.calculateItemOffsetPercent = calculateItemOffsetPercent;
// ----------------------------------------------------------------------------- Helpers methods
function calculateMaxLevel(technologies) {
    return technologies.reduce(function (result, technology) { return Math.max(result, technology.level); }, 0);
}
exports.calculateMaxLevel = calculateMaxLevel;
function findGroupIndex(groups, group) {
    return groups.findIndex(function (acc) { return acc.id === group.id; });
}
exports.findGroupIndex = findGroupIndex;
function calculateNumberOfItemsForLevelAndGroup(technologies, technology) {
    return technologies.filter(function (acc) { return acc.groupId === technology.groupId && acc.level === technology.level; }).length;
}
exports.calculateNumberOfItemsForLevelAndGroup = calculateNumberOfItemsForLevelAndGroup;
function calculateIndexInLevelAndGroup(technologies, technology) {
    var grouped = technologies.filter(function (acc) { return acc.groupId === technology.groupId && acc.level === technology.level; });
    return grouped.findIndex(function (acc) { return acc.id === technology.id; });
}
exports.calculateIndexInLevelAndGroup = calculateIndexInLevelAndGroup;
function findGroupForTechnology(groups, technology) {
    return groups.find(function (acc) { return acc.id === technology.groupId; });
}
exports.findGroupForTechnology = findGroupForTechnology;
function findTechnologiesForGroupAndLevel(technologies, groupId, level) {
    return technologies.filter(function (acc) { return acc.groupId === groupId && acc.level === level; });
}
exports.findTechnologiesForGroupAndLevel = findTechnologiesForGroupAndLevel;
function indexOfTehnology(technologies, technology) {
    return technologies.findIndex(function (acc) { return acc.id === technology.id; });
}
exports.indexOfTehnology = indexOfTehnology;
//# sourceMappingURL=transforms.js.map