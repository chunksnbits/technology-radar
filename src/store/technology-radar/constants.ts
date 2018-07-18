
import { uuid } from 'utils/uuid';

export const defaultColors = [
  'rgba(173, 255, 47, 1)',   // greenyellow
  'rgba(0, 255, 255, 1)',    // cyan
  'rgba(255, 0, 255, 1)',     // magenta
];

export const defaultTechnology = (group: Group, id: string = uuid()): Technology => ({
  id,
  name: '* New *',
  description: '',
  logo: '',
  groupId: group.id,
  level: 0,
});

export const defaultGroup = (group: number, id: string = uuid()) => ({
  name: '* New *',
  id,
  group,
  description: '',
  color: '#FF0000',
});

export const defaultState = () => {
  const groups = [
    Object.assign(defaultGroup(0), { name: 'Define you first group', color: defaultColors[0] }),
    Object.assign(defaultGroup(0), { name: 'Second group', color: defaultColors[1] }),
    Object.assign(defaultGroup(0), { name: 'Third group', color: defaultColors[2] }),
  ];

  const technologies = [
    Object.assign(defaultTechnology(groups[0]), { name: 'Add you first technology to first group', level: 1 }),
    Object.assign(defaultTechnology(groups[1]), { name: 'Add technologies to second group', level: 3 }),
    Object.assign(defaultTechnology(groups[2]), { name: 'Add more technologies', level: 2 }),
  ]

  return {
    edited: false,
    technologies,
    groups,
    settings: {
      editable: false,
      edited: false,
      innerRadiusPercent: 0,
      outerRadiusPercent: 50,
    },
  };
};
