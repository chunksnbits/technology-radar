"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("core/utils/uuid");
exports.defaultColors = [
    'rgba(173, 255, 47, 1)',
    'rgba(0, 255, 255, 1)',
    'rgba(255, 0, 255, 1)' // magenta
];
exports.defaultTechnology = function (group, id) {
    if (id === void 0) { id = uuid_1.uuid(); }
    return ({
        id: id,
        name: '* New *',
        description: '',
        logo: '',
        groupId: group.id,
        level: 0
    });
};
exports.defaultGroup = function (group, id) {
    if (id === void 0) { id = uuid_1.uuid(); }
    return ({
        name: '* New *',
        id: id,
        group: group,
        description: '',
        color: '#FF0000'
    });
};
exports.defaultState = function () {
    var groups = [
        Object.assign(exports.defaultGroup(0), { name: 'Define you first group', color: exports.defaultColors[0] }),
        Object.assign(exports.defaultGroup(0), { name: 'Second group', color: exports.defaultColors[1] }),
        Object.assign(exports.defaultGroup(0), { name: 'Third group', color: exports.defaultColors[2] }),
    ];
    var technologies = [
        Object.assign(exports.defaultTechnology(groups[0]), { name: 'Add you first technology to first group', level: 1 }),
        Object.assign(exports.defaultTechnology(groups[1]), { name: 'Add technologies to second group', level: 3 }),
        Object.assign(exports.defaultTechnology(groups[2]), { name: 'Add more technologies', level: 2 })
    ];
    return {
        edited: false,
        technologies: technologies,
        groups: groups,
        settings: {
            editable: false,
            edited: false,
            innerRadiusPercent: 0,
            outerRadiusPercent: 50
        }
    };
};
//# sourceMappingURL=constants.js.map