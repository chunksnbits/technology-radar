
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import * as React from 'react';

import { Button, TextField } from '@material-ui/core';

import { classNames } from 'utils/dom';
import { FormGroup } from 'ui/components/FormGroup';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody } from 'ui/components/ExpansionPanel';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface GroupPanelProps {
  className?: string;
  active: boolean;
  group: Group;

  children?: ReactNode;

  onToggle: Function;
  onValueChange: Function;
  onConfirm: Function;
  onDelete: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class GroupPanel extends Component<GroupPanelProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <ExpansionPanel
        active={ this.props.active }
        onToggle={ this.propagateToggle }
        className={ classNames('c-group-panel', this.props.className) }>

        <ExpansionPanelHeader>
          <span className='c-group-panel__group-indicator' style={{ backgroundColor: this.props.group.color }} />
          <span>
            { this.props.group.name }
          </span>
        </ExpansionPanelHeader>

        <ExpansionPanelBody>
          <form>
            <FormGroup label='Name'>
              <TextField
                type='text'
                name='name'
                fullWidth={ true }
                value={ this.props.group.name}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Color'>
              <TextField
                type='text'
                name='color'
                fullWidth={ true }
                value={ this.props.group.color}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Description'>
              <TextField
                name='description'
                multiline={ true }
                rows='5'
                rowsMax='10'
                fullWidth={ true }
                value={ this.props.group.description}
                onChange={ this.propagateValueChange } />
            </FormGroup>
          </form>
          <div className='c-group-panel__actions'>
            <Button onClick={ this.propagateConfirm } variant='flat'>
              Ok
            </Button>
            <Button onClick={ this.propagateDelete } variant='flat'>
              remove
            </Button>
          </div>
        </ExpansionPanelBody>
      </ExpansionPanel>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private propagateValueChange = (event: any) => {
    const target = event.target as HTMLInputElement;

    this.props.onValueChange(this.props.group, target.name, target.value);
  }

  private propagateToggle = (active: boolean) => {
    this.props.onToggle(this.props.group, active);
  }

  private propagateConfirm = () => {
    this.props.onConfirm(this.props.group);
  }

  private propagateDelete = () => {
    this.props.onDelete(this.props.group);
  }
}
