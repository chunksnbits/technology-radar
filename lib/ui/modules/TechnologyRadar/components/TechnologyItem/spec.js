"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
var mocks_1 = require("mocks");
// ----------------------------------------------------------------------------- Configuration
var bundleProps = function (props) {
    if (props === void 0) { props = {}; }
    return {
        technologies: props.technologies || [mocks_1.mockTechnology()],
        groups: props.groups || [mocks_1.mockGroup()],
        settings: props.settings || mocks_1.mockSettings(),
        technology: props.technology || mocks_1.mockTechnology(),
        selected: props.selected || false,
        focused: props.focused || false,
        onSelect: props.onSelect || mocks_1.noop,
        onMouseOver: props.onMouseOver || mocks_1.noop,
        onMouseOut: props.onMouseOut || mocks_1.noop,
    };
};
var createWithProps = function (props) {
    if (props === void 0) { props = {}; }
    return (React.createElement(index_1.TechnologyItem, __assign({}, bundleProps(props))));
};
var shallowWithProps = function (props) {
    if (props === void 0) { props = {}; }
    return enzyme_1.shallow(createWithProps(props));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallowWithProps();
    expect(element.find('.c-technology-item')).toBeTruthy();
});
it('renders item in right color', function () {
    var group = mocks_1.mockGroup({ id: 'test', color: 'red' });
    var element = shallowWithProps({
        technology: mocks_1.mockTechnology({ id: 'test', groupId: group.id }),
        groups: [group],
        group: group
    });
    var button = element.find('.c-technology-item__item').render();
    expect(button.css('border-color')).toEqual('red');
});
it('does not crash if technology has not been assigned a group', function () {
    var element = shallowWithProps({
        technology: mocks_1.mockTechnology({ id: 'test', groupId: undefined })
    });
    expect(element.exists).toBeTruthy();
    expect(element.find('.c-technology-item').length).toBe(0);
});
it('does rerender if element changed', function () {
    var technology = mocks_1.mockTechnology({ id: 'test', groupId: undefined });
    var element = shallowWithProps({ technology: technology, selected: false });
    var render = spyOn(element.instance(), 'render');
    element.setProps(bundleProps({ technology: Object.assign({}, technology), selected: false }));
    expect(render).toHaveBeenCalled();
});
it('does rerender if selected state change', function () {
    var technology = mocks_1.mockTechnology({ id: 'test', groupId: undefined });
    var element = shallowWithProps({ technology: technology, selected: true });
    var render = spyOn(element.instance(), 'render');
    element.setProps(bundleProps({ technology: technology, selected: false }));
    expect(render).toHaveBeenCalled();
    element.setProps({ technology: technology, selected: true });
    expect(render).toHaveBeenCalled();
});
it('triggers selectTechnology on item click', function () {
    var group = mocks_1.mockGroup({ id: 'test', color: 'red' });
    var selectTechnology = jasmine.createSpy();
    var technology = mocks_1.mockTechnology({ id: 'test', groupId: group.id });
    var element = shallowWithProps({
        technology: technology,
        onSelect: selectTechnology,
        groups: [group]
    });
    var button = element.find('.c-technology-item__item');
    var event = new Event('noop');
    button.simulate('click', event);
    expect(selectTechnology).toHaveBeenCalledWith(technology, event);
});
it('renders item in right position', function () {
    var group = mocks_1.mockGroup({ id: 'test' });
    var technology = mocks_1.mockTechnology({ id: 'test', groupId: group.id });
    var element;
    var button;
    element = shallowWithProps({
        technology: technology,
        technologies: [mocks_1.mockTechnology(), technology],
        groups: [mocks_1.mockGroup(), group],
        group: group
    });
    button = element.find('.c-technology-item').render();
    expect(button.css('transform')).toEqual("rotateZ(270deg)");
    element = shallowWithProps({
        technology: technology,
        technologies: [technology, mocks_1.mockTechnology({ groupId: group.id }), mocks_1.mockTechnology({ groupId: group.id })],
        groups: [mocks_1.mockGroup(), group, mocks_1.mockGroup()],
        group: group
    });
    button = element.find('.c-technology-item').render();
    expect(button.css('transform')).toEqual("rotateZ(150deg)");
});
it('offsets items within same group', function () {
    var group = mocks_1.mockGroup({ id: 'test' });
    var technologies = [
        mocks_1.mockTechnology({ id: 'one', groupId: group.id }),
        mocks_1.mockTechnology({ id: 'two', groupId: group.id })
    ];
    var sample = shallowWithProps({
        technology: technologies[0],
        technologies: technologies,
        groups: [mocks_1.mockGroup(), group],
        group: group
    });
    var other = shallowWithProps({
        technology: technologies[1],
        technologies: technologies,
        groups: [mocks_1.mockGroup(), group],
        group: group
    });
    var buttons = [
        sample.find('.c-technology-item').render(),
        other.find('.c-technology-item').render()
    ];
    // 2 groups, 1 element in group
    expect(buttons[0].css('width')).not.toEqual(buttons[1].css('width'));
});
it('offsets items to the right base position same group', function () {
    var groups = [
        mocks_1.mockGroup({ id: 'group-one' }),
        mocks_1.mockGroup({ id: 'group-two' })
    ];
    var technologies = [
        mocks_1.mockTechnology({ id: 'one', groupId: 'group-one' }),
        mocks_1.mockTechnology({ id: 'two', groupId: 'group-two' })
    ];
    var sample = shallowWithProps({
        technology: technologies[0],
        technologies: technologies,
        groups: groups
    });
    var other = shallowWithProps({
        technology: technologies[1],
        technologies: technologies,
        groups: groups
    });
    expect(sample.render().css('transform')).toContain('rotateZ(90deg)');
    expect(other.render().css('transform')).toContain('rotateZ(270deg)');
});
//# sourceMappingURL=spec.js.map