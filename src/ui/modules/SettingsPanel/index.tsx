
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { TechnologyRadarContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';
import { Tabs, TabBody, TabHeader, Tab } from 'ui/components/Tabs';

import { Groups } from './components/Groups';
import { Technologies } from './components/Technologies';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface SettingsPanelProps {
  className?: string;
  technologyRadar?: TechnologyRadar & TechnologyRadarActions;
}

export interface SettingsPanelState {
  activeGroup: Group;
  activeTechnology: Technology;
  activeTab: string;
}

// ----------------------------------------------------------------------------- Implementation
@consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
export class SettingsPanel extends Component<SettingsPanelProps, SettingsPanelState> {

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
    const { groups, clearAll, technologies, updateGroup, updateTechnology, removeGroup, removeTechnology } = this.props.technologyRadar;

    return (
      <div className={ classNames('c-settings-panel', this.props.className) }>
        <Tabs sticky={ true }>
          <TabHeader value={ this.state.activeTab } onChange={ this.handleSetActiveTab } fullWidth={ true }>
            <Tab label='Groups' value='groups' fullWidth={ true } />
            <Tab label='Technologies' value='technologies' fullWidth={ true } />
          </TabHeader>

          <TabBody active={ this.state.activeTab === 'groups' }>
            <Groups className='c-settings-panel__groups'
              groups={ groups }
              activeGroup={ this.state.activeGroup }
              onToggle={ this.handleToggleGroup }
              onAdd={ this.props.technologyRadar.addGroup }
              onClear={ clearAll }
              onConfirm={ this.handleConfirmGroup }
              onChange={ updateGroup }
              onDelete={ removeGroup } />
          </TabBody>

          <TabBody active={ this.state.activeTab === 'technologies' }>
            <Technologies className='c-settings-panel__technologies'
              technologies={ technologies }
              groups={ groups }
              activeTechnology={ this.state.activeTechnology }
              onToggle={ this.handleToggleTechnology }
              onConfirm={ this.handleConfirmTechnology }
              onAdd={ this.props.technologyRadar.addTechnology }
              onClear={ clearAll }
              onChange={ updateTechnology }
              onDelete={ removeTechnology } />
          </TabBody>
        </Tabs>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  handleSetActiveTab = (_, tabName: string) => {
    this.setState(() => ({
      activeTab: tabName
    }));
  }

  handleToggleTechnology = (technology: Technology, active: boolean) =>  {
    this.setState({
      activeTechnology: active ? technology : null
    });
  }

  handleConfirmTechnology = () =>  {
    this.setState({
      activeTechnology: null
    });
  }

  handleToggleGroup = (group: Group, active: boolean) =>  {
    this.setState({
      activeGroup: active ? group : null
    });
  }

  handleConfirmGroup = () =>  {
    this.setState({
      activeGroup: null
    });
  }
}
