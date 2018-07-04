// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody, ExpansionPanelFooter } from './index';
import { noop } from 'mocks';
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: noop }));
    expect(element.exists).toBeTruthy();
});
it('calls onToggle when header is clicked', function () {
    var spyOnToggle = jasmine.createSpy();
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: spyOnToggle },
        React.createElement(ExpansionPanelHeader, null)));
    var header = element.find('.c-expansion-panel__header');
    header.simulate('click');
    expect(spyOnToggle).toBeCalledWith(true);
});
it('calls onToggle with inverse active value', function () {
    var spyOnToggle = jasmine.createSpy();
    var element = shallow(React.createElement(ExpansionPanel, { active: true, onToggle: spyOnToggle },
        React.createElement(ExpansionPanelHeader, null)));
    var header = element.find('.c-expansion-panel__header');
    header.simulate('click');
    expect(spyOnToggle).toBeCalledWith(false);
});
it('renders active modification if active', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: true, onToggle: noop }));
    expect(element.find('.c-expansion-panel--active').length).toEqual(1);
});
it('renders header if provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: noop },
        React.createElement(ExpansionPanelHeader, null)));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelHeader, null))).toEqual(true);
});
it('renders body if provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: noop },
        React.createElement(ExpansionPanelBody, null)));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelBody, null))).toEqual(true);
});
it('renders footer if provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: noop },
        React.createElement(ExpansionPanelFooter, null)));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelFooter, null))).toEqual(true);
});
it('does not render header if not provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: noop }));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelHeader, null))).toEqual(false);
});
it('does not render body if not provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: noop }));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelBody, null))).toEqual(false);
});
it('does not render footer if not provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, { active: false, onToggle: noop }));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelFooter, null))).toEqual(false);
});
//# sourceMappingURL=spec.js.map