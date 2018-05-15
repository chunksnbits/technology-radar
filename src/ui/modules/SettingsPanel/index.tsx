
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { GroupPanel } from './components/GroupPanel';
import { ItemPanel } from './components/ItemPanel';

// ----------------------------------------------------------------------------- Configuration
export interface SettingsPanelProps {
  className?: string;
  applicationState: ApplicationState;
}

export interface SettingsPanelState {
  activeGroup: string;
  activeItem: string;
}

// ----------------------------------------------------------------------------- Implementation
export class SettingsPanel extends Component<SettingsPanelProps, SettingsPanelState> {

  constructor(props: SettingsPanelProps) {
    super(props);

    this.state = {
      activeItem: null,
      activeGroup: null
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {

    const { groups, technologies } = this.props.applicationState;

    const modifiers = [];

    return (
      <div className={ classNames('c-settings-panel', this.props.className, ...modifiers) }>
        <h4>Groups</h4>
        <div className='c-settings-panel__groups'>
          { this.renderGroups(groups, technologies) }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private bindToggleActiveGroup(groupId: string) {
    return (active: boolean) => {
      return this.setState({ activeGroup: active ? groupId : null });
    };
  }

  private bindToggleActiveItem(itemId: string) {
    return () => this.setState({ activeItem: this.state.activeItem === itemId ? null : itemId });
  }

  private handleGroupValueChange = (group: Group, key: string, value: string) => {
    this.props.applicationState.updateGroup(group, key, value);
  }

  private handleItemValueChange = (item: Technology, key: string, value: string) => {
    this.props.applicationState.updateTechnology(item, key, value);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderGroups(groups: Group[], technologies: Technology[]): ReactNode {
    return groups.map((group) => {
      return (
        <GroupPanel
          key={ group.id }
          group={group}
          active={ this.state.activeGroup === group.id }
          onToggleGroup={ this.bindToggleActiveGroup(group.id) }
          onGroupValueChange={ this.handleGroupValueChange }>
          { this.renderTechnologiesForGroup(technologies, group) }
        </GroupPanel>
      );
    });
  }

  private renderTechnologiesForGroup(technologies: Technology[], group: Group): ReactNode {
    const items = technologies.filter(technologie => technologie.groupId === group.id);

    return items.map((item) => {
      return (
        <ItemPanel
          key={ item.id }
          technology={ item }
          active={ this.state.activeItem === item.id }
          onToggleItem={ this.bindToggleActiveItem(item.id) }
          onItemValueChange={ this.handleItemValueChange } />
      );
    });
  }
}
