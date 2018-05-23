
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { Button } from '@material-ui/core';

import { classNames } from 'utils/dom';

import { GroupPanel } from '../GroupPanel';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface GroupsProps {
  className?: string;
  groups: Group[];
  onAddGroup: Function;
  onGroupValueChange: Function;
  onClear: Function;
  onDelete: Function;
}

interface GroupsState {
  activeGroup: Group;
}

// ----------------------------------------------------------------------------- Implementation
export class Groups extends Component<GroupsProps, GroupsState> {
  private handlers: BoundHandlers = {};

  constructor(props: GroupsProps) {
    super(props);

    this.state = {
      activeGroup: null
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <div className={ classNames('c-groups', this.props.className) }>{
        this.props.groups.map(group =>
          <GroupPanel
            key={ group.id }
            group={ group }
            active={ this.state.activeGroup === group }
            onToggle={ this.bindToggleActiveGroup(group) }
            onValueChange={ this.props.onGroupValueChange }
            onDelete={ this.bindDelete(group) } />
        )}

        <div className='c-groups__actions'>
          <Button
            variant='raised'
            onClick={ this.props.onAddGroup as any }
            className='c-groups__action c-groups__action--add-group'>
            Add Group
          </Button>

          <Button
            variant='raised'
            color='secondary'
            onClick={ this.props.onClear as any }
            className='c-groups__action c-groups__action--clear-all'>
            Clear all
          </Button>
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

  private bindDelete(group: Group): Function {
    const name = `delete-group-${group.id}`;

    if (!this.handlers[name]) {
      this.handlers[name] = (active: boolean) => {
        return this.props.onDelete(group);
      };
    }

    return this.handlers[name];
  }
}
