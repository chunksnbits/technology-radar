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
import { createClasses, noop } from 'mocks';
import { Footer } from '.';
import { ViewToggle } from './components/view-toggle';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Configuration
var classes = createClasses(styles);
var withProps = function (props) {
    if (props === void 0) { props = {}; }
    return (__assign({ viewMode: 'radar', toggleViewMode: noop }, classes, props));
};
// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', function () {
    var element = shallow(React.createElement(Footer, __assign({}, withProps())));
    expect(element.exists).toBeTruthy();
    element.unmount();
});
it('renders toggle view button', function () {
    var element = shallow(React.createElement(Footer, __assign({}, withProps({ viewMode: 'list' }))));
    expect(element.find(ViewToggle).props().viewMode).toEqual('list');
});
//# sourceMappingURL=spec.js.map