
// // ----------------------------------------------------------------------------- Dependencies
// import { TechnologyRadarImpl } from './index';
// import { mockTechnology, mockGroup } from 'mocks';
// import { isObservableArray } from 'mobx';

// // ----------------------------------------------------------------------------- Implementation
// it('initializes application state', () => {
//   const state = new TechnologyRadarImpl();

//   expect(isObservableArray(state.technologies)).toBeTruthy();
//   expect(isObservableArray(state.groups)).toBeTruthy();
// });

// it('applies initialState', () => {
//   const technologies = [mockTechnology()];
//   const groups = [mockGroup()];

//   const state = new TechnologyRadarImpl({
//     technologies,
//     groups
//   });

//   expect(state.technologies.length).toBe(1);
//   expect(state.technologies[0]).toEqual(technologies[0]);

//   expect(state.groups.length).toBe(1);
//   expect(state.groups[0]).toEqual(groups[0]);
// });

// it('inializes edited data on setEditMode', () => {
//   const state = new TechnologyRadarImpl({
//     editMode: false,
//     data: {
//       groups: [mockGroup()],
//       technologies: [mockTechnology()]
//     }
//   });

//   const [group] = state.groups;

//   state.updateGroup(group, 'name', 'Changed');

//   expect(state.groups[0].name).toEqual('Changed');
//   expect(group.name).not.toEqual('Changed');
// });

// it('updates group on updateGroup', () => {
//   const state = new TechnologyRadarImpl({ groups: [mockGroup()] });

//   const [group] = state.groups;
//   state.updateGroup(group, 'name', 'Changed');

//   expect(state.groups[0].name).toEqual('Changed');
// });

// it('updates technologies on updateTechnology', () => {
//   const state = new TechnologyRadarImpl({ technologies: [mockTechnology()] });

//   const [technology] = state.technologies;
//   state.updateTechnology(technology, 'name', 'Changed');

//   expect(state.technologies[0].name).toEqual('Changed');
// });

// it('adds group on addGroup', () => {
//   const state = new TechnologyRadarImpl({ groups: [mockGroup()] });
//   state.addGroup();

//   expect(state.groups.length).toEqual(2);
// });

// it('adds technology on addTechnology', () => {
//   const state = new TechnologyRadarImpl({ technologies: [mockTechnology()], groups: [mockGroup()] });
//   state.addTechnology(state.groups[0]);

//   expect(state.technologies.length).toEqual(2);
// });

// it('removes all groups and technologies on clearAll', () => {
//   const state = new TechnologyRadarImpl({ technologies: [mockTechnology()], groups: [mockGroup()] });
//   state.clearAll();

//   expect(state.groups.length).toEqual(0);
//   expect(state.technologies.length).toEqual(0);
// });
