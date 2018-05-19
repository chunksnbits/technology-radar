
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { classNames } from 'utils/dom';

import { Iterator } from 'ui/components/Iterator';

import { GroupPanel } from '../GroupPanel';
import { TechnologyPanel } from '../TechnologyPanel';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarSettingsProps {
  className?: string;
  groups: Group[];
  technologies: Technology[];
  onAddTechnology: Function;
  onAddGroup: Function;
  onClearAll: Function;
  onGroupValueChange: Function;
  onTechnologyValueChange: Function;
}

interface TechnologyRadarSettingsState {
  activeGroup: Group;
  activeTechnology: Technology;
}

// ----------------------------------------------------------------------------- Implementation
@observer
export class TechnologyRadarSettings extends Component<TechnologyRadarSettingsProps, TechnologyRadarSettingsState> {
  private handlers: BoundHandlers = {};

  constructor(props: TechnologyRadarSettingsProps) {
    super(props);

    this.state = {
      activeGroup: null,
      activeTechnology: null
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <div className={ classNames('c-technology-radar-settings', this.props.className) }>
        <Iterator collection={ this.props.groups }>{ group =>
          <GroupPanel
            key={ group.id }
            group={ group }
            active={ this.state.activeGroup === group.id }
            onToggleGroup={ this.bindToggleActiveGroup(group) }
            onGroupValueChange={ this.props.onGroupValueChange }>

            <Iterator collection={ this.filterTechnologies(this.props.technologies, group) }>{ technologie =>
              <TechnologyPanel
                key={ technologie.id }
                technology={ technologie }
                active={ this.state.activeTechnology === technologie.id }
                onToggleItem={ this.bindToggleActiveTechnology(technologie) }
                onItemValueChange={ this.props.onTechnologyValueChange } />
            }</Iterator>

            <div className='c-technology-radar-settings__actions'>
              <button
                onClick={ this.bindAddTechnology(group) }
                className='c-technology-radar-settings__action c-technology-radar-settings__action--add-technology'>
                Add technology
              </button>
            </div>
          </GroupPanel>
        }</Iterator>

        <div className='c-technology-radar-settings__actions'>
          <button
            onClick={ this.props.onClearAll as any }
            className='c-technology-radar-settings__action c-technology-radar-settings__action--clear-all'>
            Clear all
          </button>

          <button
            onClick={ this.props.onAddGroup as any }
            className='c-technology-radar-settings__action c-technology-radar-settings__action--add-group'>
            Add Group
          </button>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private bindToggleActiveGroup(group: Group): Function {
    const name = `toggle-group-${group.id}`;

    if (!this.handlers[name]) {
      this.handlers[name] = (active: boolean) => {
        return this.setState({ activeGroup: active ? group : null });
      };
    }

    return this.handlers[name];
  }

  private bindToggleActiveTechnology(technology: Technology): Function {
    const name = `toggle-technology-${technology.id}`;

    if (!this.handlers[name]) {
      this.handlers[name] = (active: boolean) => {
        return this.setState({ activeTechnology: active ? technology : null });
      };
    }

    return this.handlers[name];
  }

  private bindAddTechnology(group: Group): any {
    const name = `add-${ group.id }`;

    if (!this.handlers[name]) {
      this.handlers[name] = () => this.props.onAddTechnology(group);
    }

    return this.handlers[name] as any;
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private filterTechnologies(technologies: Technology[], group: Group): Technology[] {
    return technologies.filter(technology => technology.groupId === group.id);
  }
}
