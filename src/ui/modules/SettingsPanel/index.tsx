
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
  activeGroup: string;
  activeItem: string;
  activeTab: string;
}

// ----------------------------------------------------------------------------- Implementation
@consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
export class SettingsPanel extends Component<SettingsPanelProps, SettingsPanelState> {

  private handlers: BoundHandlers = {};

  constructor(props: SettingsPanelProps) {
    super(props);

    this.state = {
      activeItem: null,
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
            <Tab label='Group' value='groups' fullWidth={ true } />
            <Tab label='Technologies' value='technologies' fullWidth={ true } />
          </TabHeader>

          <TabBody active={ this.state.activeTab === 'groups' }>
            <Groups className='c-settings-panel__groups'
              groups={ groups }
              onAddGroup={ this.bindAddGroup() }
              onClear={ clearAll }
              onGroupValueChange={ updateGroup }
              onDelete={ removeGroup } />
          </TabBody>

          <TabBody active={ this.state.activeTab === 'technologies' }>
            <Technologies className='c-settings-panel__technologies'
              technologies={ technologies }
              groups={ groups }
              onAddTechnology={ this.bindAddTechnology() }
              onClear={ clearAll }
              onTechnologyValueChange={ updateTechnology }
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

  bindAddTechnology = () => {
    if (!this.handlers.technologies) {
      this.handlers.technologies = (group) =>  {
        this.props.technologyRadar.addTechnology(group);
      };
    }

    return this.handlers.technologies;
  }

  bindAddGroup = () => {
    if (!this.handlers.groups) {
      this.handlers.groups = () =>  {
        this.props.technologyRadar.addGroup();
      };
    }

    return this.handlers.groups;
  }
}
