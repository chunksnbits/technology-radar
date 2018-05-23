
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { TechnologyRadarContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

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
}

// ----------------------------------------------------------------------------- Implementation
@consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
export class SettingsPanel extends Component<SettingsPanelProps, SettingsPanelState> {

  private handlers: BoundHandlers = {};

  constructor(props: SettingsPanelProps) {
    super(props);

    this.state = {
      activeItem: null,
      activeGroup: null
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { groups, clearAll, technologies, updateGroup, updateTechnology, removeGroup, removeTechnology } = this.props.technologyRadar;

    return (
      <div className={ classNames('c-settings-panel', this.props.className) }>
        <h4>Groups</h4>

        <Groups className='c-settings-panel__groups'
          groups={ groups }
          onAddGroup={ this.bindAddGroup() }
          onClear={ clearAll }
          onGroupValueChange={ updateGroup }
          onDelete={ removeGroup } />

        <Technologies className='c-settings-panel__technologies'
          technologies={ technologies }
          groups={ groups }
          onAddTechnology={ this.bindAddTechnology() }
          onClear={ clearAll }
          onTechnologyValueChange={ updateTechnology }
          onDelete={ removeTechnology } />
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
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
