import { uuid } from 'utils/uuid';
export var defaultColors = [
    'rgba(173, 255, 47, 1)',
    'rgba(0, 255, 255, 1)',
    'rgba(255, 0, 255, 1)',
];
export var defaultTechnology = function (group, id) {
    if (id === void 0) { id = uuid(); }
    return ({
        id: id,
        name: '* New *',
        description: '',
        logo: '',
        groupId: group.id,
        level: 0,
    });
};
export var defaultGroup = function (group, id) {
    if (id === void 0) { id = uuid(); }
    return ({
        name: '* New *',
        id: id,
        group: group,
        description: '',
        color: '#FF0000',
    });
};
export var defaultState = function () {
    var groups = [
        Object.assign(defaultGroup(0), { name: 'Define you first group', color: defaultColors[0] }),
        Object.assign(defaultGroup(0), { name: 'Second group', color: defaultColors[1] }),
        Object.assign(defaultGroup(0), { name: 'Third group', color: defaultColors[2] }),
    ];
    var technologies = [
        Object.assign(defaultTechnology(groups[0]), { name: 'Add you first technology to first group', level: 1 }),
        Object.assign(defaultTechnology(groups[1]), { name: 'Add technologies to second group', level: 3 }),
        Object.assign(defaultTechnology(groups[2]), { name: 'Add more technologies', level: 2 }),
    ];
    return {
        edited: false,
        technologies: technologies,
        groups: groups,
        settings: {
            editable: false,
            edited: false,
            innerRadiusPercent: 0,
            outerRadiusPercent: 50,
        },
    };
};
//# sourceMappingURL=constants.js.map