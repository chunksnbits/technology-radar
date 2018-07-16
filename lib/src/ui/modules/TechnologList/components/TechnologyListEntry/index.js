var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { createRef, PureComponent } from 'react';
import { Button } from '@material-ui/core';
import { styled, classNames } from 'utils';
import { GroupIndicator } from '../../../../components';
import { styles } from './styles.jss';
// ----------------------------------------------------------------------------- Implementation
var TechnologyListEntry = /** @class */ (function (_super) {
    __extends(TechnologyListEntry, _super);
    function TechnologyListEntry(props) {
        var _this = _super.call(this, props) || this;
        _this.elementRef = createRef();
        return _this;
    }
    TechnologyListEntry.prototype.componentDidUpdate = function () {
        if (!this.props.focusable) {
            return;
        }
        if (this.props.focused) {
            // scrollIntoView(this.elementRef.current, {
            //   block: 'nearest',
            //   behavior: 'smooth',
            // });
        }
    };
    TechnologyListEntry.prototype.render = function () {
        var _a = this.props, className = _a.className, classes = _a.classes, focusable = _a.focusable, technology = _a.technology, group = _a.group, focused = _a.focused, buttonProps = __rest(_a, ["className", "classes", "focusable", "technology", "group", "focused"]);
        var modifiers = [
            focused && classes.technologyListEntryFocused,
        ];
        return (React.createElement("li", { className: classNames.apply(void 0, [classes.root, className].concat(modifiers)), style: {}, ref: this.elementRef },
            React.createElement(Button, __assign({ role: 'flat', fullWidth: true }, buttonProps, { className: classes.technologyListEntryButton }),
                React.createElement(GroupIndicator, { className: classes.technologyListEntryGroupIndicator, color: group.color, focused: focused }),
                React.createElement("span", { className: classes.technologyListEntryLabel }, technology.name))));
    };
    TechnologyListEntry = __decorate([
        styled(styles)
    ], TechnologyListEntry);
    return TechnologyListEntry;
}(PureComponent));
export { TechnologyListEntry };
//# sourceMappingURL=index.js.map