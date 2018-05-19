
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { classNames } from 'utils/dom';
import { last } from 'utils/collection';

import { ApplicationState } from 'store/application-state';

import { TechnologyRadarSettings } from './components/TechnologyRadarSettings';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface SettingsPanelProps {
  className?: string;
}

export interface SettingsPanelState {
  activeGroup: string;
  activeItem: string;
}

// ----------------------------------------------------------------------------- Implementation
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
    return (
      <ApplicationState.Consumer>{ state =>
        <div className={ classNames('c-settings-panel', this.props.className) }>
          <h4>Groups</h4>
          <div className='c-settings-panel__groups'>
            <TechnologyRadarSettings
              groups={ state.technologyRadar.groups }
              technologies={ state.technologyRadar.technologies }
              onAddTechnology={ this.bindAddTechnology(state) }
              onAddGroup={ this.bindAddGroup(state) }
              onClearAll={ state.technologyRadar.clearAll }
              onGroupValueChange={ state.technologyRadar.updateGroup }
              onTechnologyValueChange={ state.technologyRadar.updateTechnology } />
          </div>
        </div>
      }</ApplicationState.Consumer>
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
