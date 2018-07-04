// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';
import { mockGroup } from 'mocks';
import { LegendGroupSeparators } from './index';
// ----------------------------------------------------------------------------- Implementation
it('renders group separators', function () {
    var element = shallow(React.createElement(LegendGroupSeparators, { groups: [mockGroup(), mockGroup({ id: 2 })] }));
    expect(element.find('.c-legend-group-separators__separator').length).toBe(2);
});
//# sourceMappingURL=spec.js.map