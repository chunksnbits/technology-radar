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
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';
import { classNames } from 'core/utils/dom';
import { TechnologyPanel } from '../TechnologyPanel';
import './styles.scss';
import { Button } from '@material-ui/core';
// ----------------------------------------------------------------------------- Implementation
var Technologies = /** @class */ (function (_super) {
    __extends(Technologies, _super);
    function Technologies(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeTechnology: null
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    Technologies.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: classNames('c-technologies', this.props.className) },
            this.props.technologies.map(function (technology) {
                return React.createElement(TechnologyPanel, { key: technology.id, technology: technology, groups: _this.props.groups, active: _this.isActive(technology, _this.props.activeTechnology), onConfirm: _this.props.onConfirm, onToggle: _this.props.onToggle, onValueChange: _this.props.onChange, onDelete: _this.props.onDelete });
            }),
            React.createElement("div", { className: 'c-technologies__actions' },
                React.createElement(Button, { variant: 'raised', onClick: this.props.onAdd, className: 'c-technologies__action c-technologies__action--add-technology' }, "Add technology"),
                React.createElement(Button, { variant: 'raised', onClick: this.props.onClear, className: 'c-technologies__action c-technologies__action--clear-all' }, "Clear all"))));
    };
    // ----------------------------------------------------------------------------- Helpers methods
    Technologies.prototype.isActive = function (technology, activeTechnology) {
        return Boolean(activeTechnology) && technology.id === activeTechnology.id;
    };
    return Technologies;
}(PureComponent));
export { Technologies };
//# sourceMappingURL=index.js.map