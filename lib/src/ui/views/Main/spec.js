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
import { shallow } from 'enzyme';
import { createClasses, noop, mockTechnology } from 'mocks';
import { Header } from '../../modules/Header';
import { TechnologyGraph } from '../../modules/TechnologyGraph';
import { Footer } from '../../modules/Footer';
import { MainView } from '.';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var withProps = function (props) {
    if (props === void 0) { props = {}; }
    return (__assign({ editor: false, selectedTechnology: mockTechnology(), viewMode: 'radar', selectTechnology: noop, classes: classes }, props));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(MainView, __assign({}, withProps())));
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders technology radar', function () {
    var element = shallow(React.createElement(MainView, __assign({}, withProps())));
    expect(element.containsMatchingElement(React.createElement(TechnologyGraph, null))).toEqual(true);
});
it('renders header', function () {
    var element = shallow(React.createElement(MainView, __assign({}, withProps())));
    expect(element.containsMatchingElement(React.createElement(Header, null))).toEqual(true);
});
it('renders footer', function () {
    var element = shallow(React.createElement(MainView, __assign({}, withProps())));
    expect(element.containsMatchingElement(React.createElement(Footer, null))).toEqual(true);
});
//# sourceMappingURL=spec.js.map