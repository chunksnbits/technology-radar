
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { TechnologyRadarContext } from 'core/store';

import { consume } from 'core/utils/store';
import { classNames } from 'core/utils/dom';
import { Tabs, TabBody, TabHeader, Tab } from 'core/ui/components/Tabs';

import { Groups } from './components/Groups';
import { Technologies } from './components/Technologies';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface SettingsPanelProps {
  className?: string;
  groups?: Group[];
  technologies?: Technology[],
  clearAll?: () => void;
  updateGroup?: (group: Group) => void;
  updateTechnology?: (technology: Technology) => void;
  removeGroup?: (group: Group) => void;
  removeTechnology?: (technology: Technology) => void;
  addGroup?: (group: Group) => void;
  addTechnology?: (technology: Technology) => void;
}

export interface SettingsPanelState {
  activeGroup: Group;
  activeTechnology: Technology;
  activeTab: string;
}

// ----------------------------------------------------------------------------- Implementation
@consume(TechnologyRadarContext, {
  select: [
    'addGroup',
    'addTechnology',
    'groups',
    'clearAll',
    'technologies',
    'updateGroup',
    'updateTechnology',
    'removeGroup',
    'removeTechnology'
  ]
})
export class SettingsPanel extends PureComponent<SettingsPanelProps, SettingsPanelState> {

  constructor(props: SettingsPanelProps) {
    super(props);

    this.state = {
      activeTechnology: null,
      activeGroup: null,
      activeTab: 'groups'
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { addGroup, addTechnology, groups, clearAll, technologies, updateGroup, updateTechnology, removeGroup, removeTechnology } = this.props;

    return (
      <div className={ classNames('c-settings-panel', this.props.className) }>
        <Tabs sticky={ true }>
          <TabHeader
            value={ this.state.activeTab }
            onChange={ this.activeTabChangedHandler }
            fullWidth={ true }>

            <Tab label='Groups' value='groups' fullWidth={ true } />
            <Tab label='Technologies' value='technologies' fullWidth={ true } />
          </TabHeader>

          <TabBody active={ this.state.activeTab === 'groups' }>
            <Groups className='c-settings-panel__groups'
              groups={ groups }
              activeGroup={ this.state.activeGroup }
              onToggle={ this.toggleGroupHandler }
              onAdd={ addGroup }
              onClear={ clearAll }
              onConfirm={ this.confirmGroupHandler }
              onChange={ updateGroup }
              onDelete={ removeGroup } />
          </TabBody>

          <TabBody active={ this.state.activeTab === 'technologies' }>
            <Technologies className='c-settings-panel__technologies'
              technologies={ technologies }
              groups={ groups }
              activeTechnology={ this.state.activeTechnology }
              onToggle={ this.toggleTechnologyHandler }
              onConfirm={ this.confirmTechnologyHandler }
              onAdd={ addTechnology }
              onClear={ clearAll }
              onChange={ updateTechnology }
              onDelete={ removeTechnology } />
          </TabBody>
        </Tabs>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private activeTabChangedHandler = (_, tabName: string) => {
    this.setState(() => ({
      activeTab: tabName
    }));
  }

  private toggleTechnologyHandler = (technology: Technology, active: boolean) =>  {
    active = active || !this.isActiveTechnology(technology);

    this.setState({
      activeTechnology: active ? technology : null
    });
  }

  private confirmTechnologyHandler = () =>  {
    this.setState({
      activeTechnology: null
    });
  }

  private toggleGroupHandler = (group: Group, active?: boolean) =>  {
    active = active || !this.isActiveGroup(group);

    this.setState({
      activeGroup: active ? group : null
    });
  }

  private confirmGroupHandler = () =>  {
    this.setState({
      activeGroup: null
    });
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private isActiveGroup(group: Group): boolean {
    if (Boolean(group) && !Boolean(this.state.activeGroup)) {
      return false;
    }

    if (!Boolean(group)) {
      return false;
    }

    return this.state.activeGroup.id === group.id;
  }

  private isActiveTechnology(technology: Technology): boolean {
    if (Boolean(technology) && !Boolean(this.state.activeTechnology)) {
      return false;
    }

    if (!Boolean(technology)) {
      return false;
    }

    return this.state.activeTechnology.id === technology.id;
  }
}
