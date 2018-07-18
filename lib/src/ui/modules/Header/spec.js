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
import { Header } from '.';
import { shallow } from 'enzyme';
import { mockApplicationState, createClasses, extractSelectors } from 'mocks';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var selectors = extractSelectors(classes);
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(Header, __assign({ classes: classes }, mockApplicationState())));
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders title if available', function () {
    var element = shallow(React.createElement(Header, __assign({ classes: classes }, mockApplicationState({ title: 'Test' }))));
    expect(element.find(selectors.headerTitle).length).toEqual(1);
    expect(element.find(selectors.headerTitle).text()).toEqual('Test');
});
it('does not render title if not availble', function () {
    var element = shallow(React.createElement(Header, __assign({ classes: classes }, mockApplicationState({ title: null }))));
    expect(element.find(selectors.headerTitle).length).toEqual(0);
});
it('renders logo if availble', function () {
    var element = shallow(React.createElement(Header, __assign({ classes: classes }, mockApplicationState())));
    expect(element.find(selectors.headerLogo).length).toEqual(1);
});
//# sourceMappingURL=spec.js.map