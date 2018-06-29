import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { SettingsPanel } from './index';
import { mockTechnology, mockGroup } from 'mocks';
import { mount, shallow } from 'enzyme';
import { Tab, TabHeader } from 'ui/components/Tabs';
import { GroupPanel } from './components/GroupPanel';
import { TechnologyPanel } from './components/TechnologyPanel';

const mountWithState = (props: any = {}) => {
  return mount(<SettingsPanel { ...props.technologyRadar || {} } />);
}

const shallowWithState = (props: any = {}) => {
  return shallow(<SettingsPanel { ...props.technologyRadar || {} } />);
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithState();
  expect(element.find('.c-setttings-panel')).toBeTruthy();
});

it('renders tabs', () => {
  const element = mountWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: []
    }
  });

  const tabs = element.find(Tab);

  expect(tabs.length).toEqual(2);

  expect(mount(tabs.get(0)).text()).toContain('Groups');
  expect(mount(tabs.get(1)).text()).toContain('Technologies');
});

it('renders groups', () => {
  const element = mountWithState({
    technologyRadar: {
      technologies: [],
      groups: [mockGroup()]
    }
  });

  expect(element.find('.c-groups').length).toEqual(1);
});

it('renders technologies', () => {
  const element = mountWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: []
    }
  });

  expect(element.find('.c-technologies').length).toEqual(1);
});

it('updates active tab on setActiveTab', () => {
  const element = mountWithState({
    technologyRadar: {
      technologies: [],
      groups: []
    }
  });
  const tab = element.find(TabHeader).first().instance() as any;
  tab.props.onChange(null, 'technologies');
  element.update();
  expect(element.state('activeTab')).toEqual('technologies');
});

it('updates active group on toggleGroup', () => {
  const technology = mockTechnology();
  const group = mockGroup();

  const element = mountWithState({
    technologyRadar: {
      technologies: [technology],
      groups: [group]
    }
  });
  const panel = element.find(GroupPanel).first().instance() as GroupPanel;

  panel.props.onToggle(group, true);
  element.update();
  expect(element.state('activeGroup').id).toEqual(group.id);

  panel.props.onToggle(null);
  element.update();
  expect(element.state('activeGroup')).toBeFalsy();
});

it('resets active group on confirm', () => {
  const technology = mockTechnology();
  const group = mockGroup();

  const element = mountWithState({
    technologyRadar: {
      technologies: [technology],
      groups: [group]
    }
  });
  const panel = element.find(GroupPanel).first().instance() as GroupPanel;

  element.setState({ activeGroup: group });

  panel.props.onConfirm();
  element.update();

  expect(element.state('activeGroup')).toBeFalsy();
});

it('updates active technology on toggleTechnology', () => {
  const technology = mockTechnology();
  const group = mockGroup();

  const element = mountWithState({
    technologyRadar: {
      technologies: [technology],
      groups: [group]
    }
  });
  const panel = element.find(TechnologyPanel).first().instance() as TechnologyPanel;

  panel.props.onToggle(technology);
  element.update();
  expect(element.state('activeTechnology').id).toEqual(technology.id);

  panel.props.onToggle(null);
  element.update();
  expect(element.state('activeTechnology')).toBeFalsy();
});

it('resets active group on confirm', () => {
  const technology = mockTechnology();
  const group = mockGroup();

  const element = mountWithState({
    technologyRadar: {
      technologies: [technology],
      groups: [group]
    }
  });
  const panel = element.find(TechnologyPanel).first().instance() as TechnologyPanel;

  element.setState({ activeTechnology: technology });

  panel.props.onConfirm();
  element.update();

  expect(element.state('activeTechnology')).toBeFalsy();
});
