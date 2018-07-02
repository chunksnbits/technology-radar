"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
var mocks_1 = require("mocks");
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: mocks_1.noop }));
    expect(element.exists).toBeTruthy();
});
it('calls onToggle when header is clicked', function () {
    var spyOnToggle = jasmine.createSpy();
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: spyOnToggle },
        React.createElement(index_1.ExpansionPanelHeader, null)));
    var header = element.find('.c-expansion-panel__header');
    header.simulate('click');
    expect(spyOnToggle).toBeCalledWith(true);
});
it('calls onToggle with inverse active value', function () {
    var spyOnToggle = jasmine.createSpy();
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: true, onToggle: spyOnToggle },
        React.createElement(index_1.ExpansionPanelHeader, null)));
    var header = element.find('.c-expansion-panel__header');
    header.simulate('click');
    expect(spyOnToggle).toBeCalledWith(false);
});
it('renders active modification if active', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: true, onToggle: mocks_1.noop }));
    expect(element.find('.c-expansion-panel--active').length).toEqual(1);
});
it('renders header if provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: mocks_1.noop },
        React.createElement(index_1.ExpansionPanelHeader, null)));
    expect(element.containsMatchingElement(React.createElement(index_1.ExpansionPanelHeader, null))).toEqual(true);
});
it('renders body if provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: mocks_1.noop },
        React.createElement(index_1.ExpansionPanelBody, null)));
    expect(element.containsMatchingElement(React.createElement(index_1.ExpansionPanelBody, null))).toEqual(true);
});
it('renders footer if provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: mocks_1.noop },
        React.createElement(index_1.ExpansionPanelFooter, null)));
    expect(element.containsMatchingElement(React.createElement(index_1.ExpansionPanelFooter, null))).toEqual(true);
});
it('does not render header if not provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: mocks_1.noop }));
    expect(element.containsMatchingElement(React.createElement(index_1.ExpansionPanelHeader, null))).toEqual(false);
});
it('does not render body if not provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: mocks_1.noop }));
    expect(element.containsMatchingElement(React.createElement(index_1.ExpansionPanelBody, null))).toEqual(false);
});
it('does not render footer if not provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.ExpansionPanel, { active: false, onToggle: mocks_1.noop }));
    expect(element.containsMatchingElement(React.createElement(index_1.ExpansionPanelFooter, null))).toEqual(false);
});
//# sourceMappingURL=spec.js.map