
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
  activeGroup: Group;

  onAdd: Function;
  onToggle: Function;
  onChange: Function;
  onClear: Function;
  onDelete: Function;
  onConfirm: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class Groups extends Component<GroupsProps> {
  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <div className={ classNames('c-groups', this.props.className) }>{
        this.props.groups.map(group =>
          <GroupPanel
            key={ group.id }
            group={ group }
            active={ this.isActive(group, this.props.activeGroup) }
            onConfirm={ this.props.onConfirm }
            onToggle={ this.props.onToggle }
            onValueChange={ this.props.onChange }
            onDelete={ this.props.onDelete } />
        )}

        <div className='c-groups__actions'>
          <Button
            variant='flat'
            onClick={ this.props.onAdd as any }
            className='c-groups__action c-groups__action--add-group'>
            Add Group
          </Button>

          <Button
            variant='flat'
            color='secondary'
            onClick={ this.props.onClear as any }
            className='c-groups__action c-groups__action--clear-all'>
            Clear all
          </Button>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private isActive(group: Group, activeGroup: Group): boolean {
    return Boolean(activeGroup) && activeGroup.id === group.id;
  }
}
