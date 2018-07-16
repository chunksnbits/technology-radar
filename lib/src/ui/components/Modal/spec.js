import 'mocks/mock-jss';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { createClasses, extractSelectors } from 'mocks';
import { Modal } from '.';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Helpers methods
var handleClose = jest.fn(function () { });
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(Modal, { open: false, classes: classes, onClose: handleClose, position: 'parent' }));
    expect(element.exists).toBeTruthy();
});
it('renders closed if open prop is false', function () {
    var element = shallow(React.createElement(Modal, { open: false, classes: classes, onClose: handleClose, position: 'parent' }));
    expect(element.prop('open')).toBeFalsy();
});
it('renders opened if open prop is set', function () {
    var element = mount(React.createElement(Modal, { open: true, classes: classes, onClose: handleClose, position: 'parent' }));
    expect(element.prop('open')).toBeTruthy();
});
it('renders modal children as content', function () {
    var element = shallow(React.createElement(Modal, { open: true, classes: classes, onClose: handleClose, position: 'parent' }, "Test"));
    expect(element.text()).toContain('Test');
});
it('renders navigation', function () {
    var element = shallow(React.createElement(Modal, { open: true, classes: classes, onClose: handleClose, position: 'parent' }, "Test"));
    expect(element.find(selectors.modalNav).length).toBe(1);
});
it('closes on navigation close button click', function () {
    var element = shallow(React.createElement(Modal, { open: true, classes: classes, onClose: handleClose, position: 'parent' }));
    element.find(selectors.modalNavActionClose).simulate('click');
    expect(handleClose).toHaveBeenCalled();
});
it('closes on click outside modal', function () {
    var parent = shallow(React.createElement("div", null,
        React.createElement(Modal, { open: true, classes: classes, onClose: handleClose, position: 'parent' })));
    parent.simulate('click');
    expect(handleClose).toHaveBeenCalled();
});
//# sourceMappingURL=spec.js.map