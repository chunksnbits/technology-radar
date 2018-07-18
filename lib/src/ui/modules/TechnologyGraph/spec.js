var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import 'mocks/replace-consume';
import 'mocks/mock-jss';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, render } from 'enzyme';
import { mockTechnology, mockGroup, mockLevel, mockLayout, } from 'mocks';
import { LegendGroupLabels } from './components/LegendGroupLabels';
import { TechnologyItem } from './components/TechnologyItem';
import { LegendLevels } from './components/LegendLevels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';
import { TechnologyGraph } from '.';
import { createClasses, extractSelectors } from 'mocks/styled.mock';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
function withProps(props) {
    return __assign({ technologies: [mockTechnology()], groups: [mockGroup()], layout: mockLayout() }, classes, props);
}
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(TechnologyGraph, __assign({}, withProps({
        technologies: [mockTechnology()],
        groups: [mockGroup()],
    }))));
    expect(element.find(selectors.root)).toBeTruthy();
});
it('renders legend', function () {
    var element = shallow(React.createElement(TechnologyGraph, __assign({}, withProps({
        technologies: [],
    }))));
    expect(element.find(LegendGroupLabels).length).toBe(1);
    expect(element.find(LegendLevels).length).toBe(1);
    expect(element.find(LegendGroupSeparators).length).toBe(1);
});
it('renders technology a single technology', function () {
    var element = shallow(React.createElement(TechnologyGraph, __assign({}, withProps({
        technologies: [mockTechnology()],
        groups: [mockGroup()],
    }))));
    expect(element.find(TechnologyItem).length).toBe(1);
});
it('renders technology a multiple technologies', function () {
    var element = shallow(React.createElement(TechnologyGraph, __assign({}, withProps({
        technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
        groups: [mockGroup()],
    }))));
    expect(element.find(TechnologyItem).length).toBe(2);
});
it('applies base rotation', function () {
    var group = mockGroup();
    var element = render(React.createElement(TechnologyGraph, __assign({}, withProps({
        technologies: [mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
        groups: [group],
        levels: [mockLevel(), mockLevel()],
        layout: mockLayout(),
    }))));
    var transform = 'scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 0, 1, -10deg)';
    expect(element.css('transform')).toContain(transform);
});
//# sourceMappingURL=spec.js.map