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
import { shallow } from 'enzyme';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody, ExpansionPanelFooter } from '.';
import { noop, createClasses, extractSelectors } from 'mocks';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
var withProps = function (props) {
    if (props === void 0) { props = {}; }
    return __assign({ active: false, onToggle: noop, classes: classes }, props);
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps())));
    expect(element.exists).toBeTruthy();
});
it('calls onToggle when header is clicked', function () {
    var spyOnToggle = jasmine.createSpy();
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps({ onToggle: spyOnToggle })),
        React.createElement(ExpansionPanelHeader, null)));
    var header = element.find(selectors.expansionPanelHeader);
    header.simulate('click');
    expect(spyOnToggle).toBeCalledWith(true);
});
it('calls onToggle with inverse active value', function () {
    var spyOnToggle = jasmine.createSpy();
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps({ onToggle: spyOnToggle, active: true })),
        React.createElement(ExpansionPanelHeader, null)));
    var header = element.find(selectors.expansionPanelHeader);
    header.simulate('click');
    expect(spyOnToggle).toBeCalledWith(false);
});
it('renders active modification if active', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps({ active: true }))));
    expect(element.find(selectors.expansionPanelActive).length).toEqual(1);
});
it('renders header if provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps()),
        React.createElement(ExpansionPanelHeader, null)));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelHeader, null))).toEqual(true);
});
it('renders body if provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps({ active: true })),
        React.createElement(ExpansionPanelBody, null)));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelBody, null))).toEqual(true);
});
it('renders footer if provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps()),
        React.createElement(ExpansionPanelFooter, null)));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelFooter, null))).toEqual(true);
});
it('does not render header if not provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps())));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelHeader, null))).toEqual(false);
});
it('does not render body if not provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps())));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelBody, null))).toEqual(false);
});
it('does not render footer if not provided', function () {
    var element = shallow(React.createElement(ExpansionPanel, __assign({}, withProps())));
    expect(element.containsMatchingElement(React.createElement(ExpansionPanelFooter, null))).toEqual(false);
});
//# sourceMappingURL=spec.js.map