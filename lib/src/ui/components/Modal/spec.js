// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Modal } from './index';
// ----------------------------------------------------------------------------- Helpers methods
var handleClose = jest.fn(function () { });
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(Modal, { open: false, onClose: handleClose, position: 'parent' }));
    expect(element.exists).toBeTruthy();
});
it('renders closed if open prop is false', function () {
    var element = shallow(React.createElement(Modal, { open: false, onClose: handleClose, position: 'parent' }));
    expect(element.prop('open')).toBeFalsy();
});
it('renders opened if open prop is set', function () {
    var element = mount(React.createElement(Modal, { open: true, onClose: handleClose, position: 'parent' }));
    expect(element.prop('open')).toBeTruthy();
});
it('renders modal children as content', function () {
    var element = shallow(React.createElement(Modal, { open: true, onClose: handleClose, position: 'parent' }, "Test"));
    expect(element.text()).toContain('Test');
});
it('renders navigation', function () {
    var element = shallow(React.createElement(Modal, { open: true, onClose: handleClose, position: 'parent' }, "Test"));
    expect(element.find('.c-modal__nav').length).toBe(1);
});
it('closes on navigation close button click', function () {
    var element = shallow(React.createElement(Modal, { open: true, onClose: handleClose, position: 'parent' }));
    element.find('.c-modal__nav-action--close').simulate('click');
    expect(handleClose).toHaveBeenCalled();
});
it('closes on click outside modal', function () {
    var parent = shallow(React.createElement("div", null,
        React.createElement(Modal, { open: true, onClose: handleClose, position: 'parent' })));
    parent.simulate('click');
    expect(handleClose).toHaveBeenCalled();
});
//# sourceMappingURL=spec.js.map