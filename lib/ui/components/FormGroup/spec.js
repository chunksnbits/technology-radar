"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var enzyme_1 = require("enzyme");
var index_1 = require("./index");
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.FormGroup, null,
        React.createElement("input", null)));
    expect(element.exists).toBeTruthy();
});
it('throws error if no child is provided', function (done) {
    try {
        enzyme_1.shallow(React.createElement(index_1.FormGroup, null));
        fail();
    }
    catch (error) {
        done();
    }
});
it('renders label if provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.FormGroup, { label: 'Text' },
        React.createElement("input", null)));
    expect(element.contains('Text')).toBeTruthy();
});
it('does not render label if not provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.FormGroup, null,
        React.createElement("input", null)));
    expect(element.find('label').length).toEqual(0);
});
it('wires label with input automatically', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.FormGroup, { label: 'Text' },
        React.createElement("input", null)));
    var label = element.find('label');
    var id = label.getElement().props.htmlFor;
    expect(element.find("input[name=\"" + id + "\"]").length).toEqual(1);
});
it('reuses input element\'s name if provided', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.FormGroup, { label: 'Text' },
        React.createElement("input", { name: 'test' })));
    var label = element.find('label');
    expect(label.getElement().props.htmlFor).toEqual('test');
});
//# sourceMappingURL=spec.js.map