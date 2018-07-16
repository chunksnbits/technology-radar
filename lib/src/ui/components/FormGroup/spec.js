import 'mocks/mock-jss';
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { createClasses } from 'mocks';
import { FormGroup } from '.';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(FormGroup, { classes: classes },
        React.createElement("input", null)));
    expect(element.exists).toBeTruthy();
});
it('throws error if no child is provided', function (done) {
    try {
        shallow(React.createElement(FormGroup, { classes: classes }));
        fail();
    }
    catch (error) {
        done();
    }
});
it('renders label if provided', function () {
    var element = shallow(React.createElement(FormGroup, { classes: classes, label: 'Text' },
        React.createElement("input", null)));
    expect(element.contains('Text')).toBeTruthy();
});
it('does not render label if not provided', function () {
    var element = shallow(React.createElement(FormGroup, { classes: classes },
        React.createElement("input", null)));
    expect(element.find('label').length).toEqual(0);
});
it('wires label with input automatically', function () {
    var element = shallow(React.createElement(FormGroup, { classes: classes, label: 'Text' },
        React.createElement("input", null)));
    var label = element.find('label');
    var id = label.getElement().props.htmlFor;
    expect(element.find("input[name=\"" + id + "\"]").length).toEqual(1);
});
it('reuses input element\'s name if provided', function () {
    var element = shallow(React.createElement(FormGroup, { classes: classes, label: 'Text' },
        React.createElement("input", { name: 'test' })));
    var label = element.find('label');
    expect(label.getElement().props.htmlFor).toEqual('test');
});
//# sourceMappingURL=spec.js.map