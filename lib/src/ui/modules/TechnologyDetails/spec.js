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
import { shallow } from 'enzyme';
import { mockTechnology, mockGroup, extractSelectors } from 'mocks';
import { TechnologyDetails } from '.';
import { createClasses } from 'mocks';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
var withProps = function (props) {
    if (props === void 0) { props = {}; }
    return __assign({ classes: classes, groups: [mockGroup({ id: 'any' })], technologies: [mockTechnology()], selectedTechnology: null }, props);
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(TechnologyDetails, __assign({}, withProps())));
    expect(element.length).toBe(1);
});
it('renders title', function () {
    var element = shallow(React.createElement(TechnologyDetails, __assign({}, withProps({ selectedTechnology: mockTechnology({ name: 'Test', groupId: 'any' }) }))));
    expect(element.find(selectors.technologyDetailsName).text()).toBe('Test');
});
it('renders description', function () {
    var selectedTechnology = mockTechnology({ description: 'Description', groupId: 'any' });
    var element = shallow(React.createElement(TechnologyDetails, __assign({}, withProps({
        selectedTechnology: selectedTechnology,
        technologies: [selectedTechnology],
    }))));
    expect(element.find(selectors.technologyDetailsDescription).text()).toBe('Description');
});
it('renders group name', function () {
    var selectedTechnology = mockTechnology({ id: 'test', groupId: 'any' });
    var element = shallow(React.createElement(TechnologyDetails, __assign({}, withProps({
        selectedTechnology: selectedTechnology,
        technologies: [selectedTechnology, mockTechnology(), mockTechnology()],
        groups: [mockGroup({ id: 'any', name: 'Group' })],
    }))));
    expect(element.find(selectors.technologyDetailsGroupName).text()).toBe('Group');
});
it('renders group coloor', function () {
    var element = shallow(React.createElement(TechnologyDetails, __assign({}, withProps({
        groups: [mockGroup({ id: 'any', name: 'Group', color: 'red' })],
        selectedTechnology: mockTechnology({ groupId: 'any' }),
    }))));
    var color = element.find(selectors.technologyDetailsGroupColor);
    expect(color.getElement().props.style.borderColor).toBe('red');
});
//# sourceMappingURL=spec.js.map