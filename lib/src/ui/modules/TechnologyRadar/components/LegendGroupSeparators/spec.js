"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var enzyme_1 = require("enzyme");
var mocks_1 = require("mocks");
var index_1 = require("./index");
// ----------------------------------------------------------------------------- Implementation
it('renders group separators', function () {
    var element = enzyme_1.shallow(React.createElement(index_1.LegendGroupSeparators, { groups: [mocks_1.mockGroup(), mocks_1.mockGroup({ id: 2 })] }));
    expect(element.find('.c-legend-group-separators__separator').length).toBe(2);
});
//# sourceMappingURL=spec.js.map