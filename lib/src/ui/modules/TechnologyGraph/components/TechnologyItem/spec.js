var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import 'mocks/mock-jss';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, render } from 'enzyme';
import { TechnologyItem } from '.';
import { mockTechnology, mockGroup, mockSettings, noop, createClasses, extractSelectors, } from 'mocks';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
var withProps = function (props) {
    if (props === void 0) { props = {}; }
    return (__assign({ technologies: [mockTechnology()], groups: [mockGroup()], settings: mockSettings(), technology: mockTechnology(), selected: false, focused: false, onSelect: noop, onMouseOver: noop, onMouseOut: noop, classes: classes }, props));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(TechnologyItem, __assign({}, withProps())));
    expect(element.find(selectors.root)).toBeTruthy();
});
it('renders item in right color', function () {
    var group = mockGroup({ id: 'test', color: 'red' });
    var element = render(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: mockTechnology({ id: 'test', groupId: group.id }),
        groups: [group],
        selected: true,
    }))));
    var button = element.find(selectors.technologyItemItem);
    expect(button.css('border-color')).toEqual('red');
});
it('does not crash if technology has not been assigned a group', function () {
    var element = shallow(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: mockTechnology({ id: 'test', groupId: undefined }),
    }))));
    expect(element.exists).toBeTruthy();
    expect(element.find(selectors.root).length).toBe(0);
});
it('does rerender if element changed', function () {
    var technology = mockTechnology({ id: 'test', groupId: undefined });
    var element = shallow(React.createElement(TechnologyItem, __assign({}, withProps({ technology: technology, selected: false }))));
    var renderFnc = spyOn(element.instance(), 'render');
    element.setProps({ technology: Object.assign({}, technology), selected: false });
    expect(renderFnc).toHaveBeenCalled();
});
it('does rerender if selected state change', function () {
    var technology = mockTechnology({ id: 'test', groupId: undefined });
    var element = shallow(React.createElement(TechnologyItem, __assign({}, withProps({ technology: technology, selected: true }))));
    var renderFnc = spyOn(element.instance(), 'render');
    element.setProps({ technology: technology, selected: false });
    expect(renderFnc).toHaveBeenCalled();
    element.setProps({ technology: technology, selected: true });
    expect(renderFnc).toHaveBeenCalled();
});
it('triggers selectTechnology on item click', function () {
    var group = mockGroup({ id: 'test', color: 'red' });
    var selectTechnology = jasmine.createSpy();
    var technology = mockTechnology({ id: 'test', groupId: group.id });
    var element = shallow(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: technology,
        onSelect: selectTechnology,
        groups: [group],
    }))));
    var button = element.find(selectors.technologyItemItem);
    var event = new Event('noop');
    button.simulate('click', event);
    expect(selectTechnology).toHaveBeenCalledWith(technology, event);
});
it('renders item in right position', function () {
    var technology = mockTechnology({ id: 'test', groupId: 'test' });
    var element;
    element = render(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: technology,
        technologies: [mockTechnology(), technology],
        groups: [mockGroup(), mockGroup({ id: 'test' })],
        selected: true,
    }))));
    expect(element.css('transform')).toEqual("rotateZ(270deg)");
    element = render(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: technology,
        technologies: [technology, mockTechnology({ groupId: 'test' }), mockTechnology({ groupId: 'test' })],
        groups: [mockGroup(), mockGroup({ id: 'test' }), mockGroup()],
        selected: true,
    }))));
    expect(element.css('transform')).toEqual("rotateZ(150deg)");
});
it('offsets items within same group', function () {
    var group = mockGroup({ id: 'test' });
    var technologies = [
        mockTechnology({ id: 'one', groupId: group.id }),
        mockTechnology({ id: 'two', groupId: group.id }),
    ];
    var sample = render(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: technologies[0],
        technologies: technologies,
        groups: [mockGroup(), group],
        selected: true,
    }))));
    var other = render(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: technologies[1],
        technologies: technologies,
        groups: [mockGroup(), group],
        selected: true,
    }))));
    // 2 groups, 1 element in group
    expect(sample.css('width')).not.toEqual(other.css('width'));
});
it('offsets items to the right base position same group', function () {
    var groups = [
        mockGroup({ id: 'group-one' }),
        mockGroup({ id: 'group-two' }),
    ];
    var technologies = [
        mockTechnology({ id: 'one', groupId: 'group-one' }),
        mockTechnology({ id: 'two', groupId: 'group-two' }),
    ];
    var sample = render(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: technologies[0],
        technologies: technologies,
        groups: groups,
    }))));
    var other = render(React.createElement(TechnologyItem, __assign({}, withProps({
        technology: technologies[1],
        technologies: technologies,
        groups: groups,
    }))));
    expect(sample.css('transform')).toContain('rotateZ(90deg)');
    expect(other.css('transform')).toContain('rotateZ(270deg)');
});
//# sourceMappingURL=spec.js.map