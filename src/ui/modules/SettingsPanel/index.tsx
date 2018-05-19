
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { classNames } from 'utils/dom';
import { last } from 'utils/collection';

import { ApplicationState, consume } from 'store';

import { TechnologyRadarSettings } from './components/TechnologyRadarSettings';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface SettingsPanelProps {
  className?: string;
  applicationState?: ApplicationState;
}

export interface SettingsPanelState {
  activeGroup: string;
  activeItem: string;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationState, { bindTo: 'applicationState' })
@observer
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
    const { technologyRadar } = this.props.applicationState;
    const { groups, clearAll, technologies, updateGroup, updateTechnology } = technologyRadar;

    return (
      <div className={ classNames('c-settings-panel', this.props.className) }>
        <h4>Groups</h4>
        <div className='c-settings-panel__groups'>
          <TechnologyRadarSettings
            groups={ groups }
            technologies={ technologies }
            onAddTechnology={ this.bindAddTechnology(this.props.applicationState) }
            onAddGroup={ this.bindAddGroup(this.props.applicationState) }
            onClearAll={ clearAll }
            onGroupValueChange={ updateGroup }
            onTechnologyValueChange={ updateTechnology } />
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  bindAddTechnology = (state: ApplicationState) => {
    if (!this.handlers.technologies) {
      this.handlers.technologies = (group) =>  {
        state.technologyRadar.addTechnology(group);
        state.selectGroup(last(state.technologyRadar.technologies));
      };
    }

    return this.handlers.technologies;
  }

  bindAddGroup = (state: ApplicationState) => {
    if (!this.handlers.groups) {
      this.handlers.groups = () =>  {
        state.technologyRadar.addGroup();
        state.selectGroup(last(state.technologyRadar.technologies));
      };
    }

    return this.handlers.groups;
  }
}
