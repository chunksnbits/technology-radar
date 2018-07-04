import 'mocks/replace-consume';
import 'mocks/mock-jss';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import { createClasses, noop } from 'mocks';

import { Footer, FooterProps } from './index';
import { ViewToggle } from './components/view-toggle';
import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const classes = createClasses(styles);

const withProps = (props: Partial<FooterProps> = {}): FooterProps => ({
  viewMode: 'radar',
  toggleViewMode: noop,
  ...classes,
  ...props,
});

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallow(<Footer { ...withProps() }/>);

  expect(element.exists).toBeTruthy();
  element.unmount();
});


it('renders toggle view button', () => {
  const element = shallow(<Footer { ...withProps({ viewMode: 'list' }) } />);
  expect(element.find(ViewToggle).props().viewMode).toEqual('list');
});
