import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './index';

jest.mock('public/data.json', () => ({
  default: {
    groups: [],
    technologies: [],
  }
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div);
});

it('shows technology radar', () => {
  const element = shallow(<App />);
  expect(element.find('.c-technology-radar')).toBeTruthy();
});

it('shows app title and logo', () => {
  const element = shallow(<App />);

  expect(element.find('.c-app__title').length).toBeTruthy();
  expect(element.find('.c-app__logo').length).toBeTruthy();
});
