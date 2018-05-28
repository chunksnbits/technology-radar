
// ----------------------------------------------------------------------------- Dependencies
import { Component, ChangeEvent } from 'react';
import * as React from 'react';

import { Button, TextField, Select, MenuItem } from '@material-ui/core';

import { classNames } from 'utils/dom';
import { FormGroup } from 'ui/components/FormGroup';
import { ExpansionPanel, ExpansionPanelHeader, ExpansionPanelBody } from 'ui/components/ExpansionPanel';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyPanelProps {
  className?: string;
  active: boolean;
  technology: Technology;
  groups: Group[];

  onConfirm: Function;
  onToggle: Function;
  onValueChange: Function;
  onDelete: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyPanel extends Component<TechnologyPanelProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [
      this.props.active && 'c-technology-panel--active'
    ];

    return (
      <ExpansionPanel
        active={ this.props.active }
        onToggle={ this.propagateToggle }
        className={ classNames('c-technology-panel', this.props.className, ...modifiers) }>

        <ExpansionPanelHeader>
          <span className='c-technology-panel__title'>
            { this.props.technology.name }
          </span>
        </ExpansionPanelHeader>

        <ExpansionPanelBody>
          <form>
            <FormGroup label='Name'>
              <TextField
                type='text'
                name='name'
                fullWidth={ true }
                value={ this.props.technology.name || '' }
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Id'>
              <TextField
                type='text'
                name='id'
                fullWidth={ true }
                value={ this.props.technology.id || '' }
                onChange={ this.propagateValueChange }
                disabled={ true } />
            </FormGroup>
            <FormGroup label='Group'>
              <Select
                value={ this.props.technology.groupId || '' }
                onChange={ this.propagateGroupValueChange }
                name='groupId'
                fullWidth={ true }>
                {
                  this.props.groups.map((group) => {
                    return (
                      <MenuItem key={ group.id } value={ group.id }>{ group.name }</MenuItem>
                    );
                  })
                }
              </Select>
            </FormGroup>
            <FormGroup label='Level'>
              <TextField
                type='number'
                name='level'
                fullWidth={ true }
                value={ this.props.technology.level || 0 }
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Logo'>
              <TextField
                type='text'
                name='logo'
                fullWidth={ true }
                value={ this.props.technology.logo || '' }
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Description'>
              <TextField
                type='text'
                name='description'
                fullWidth={ true }
                multiline={ true }
                rows='5'
                rowsMax='8'
                value={ this.props.technology.description || '' }
                onChange={ this.propagateValueChange } />
            </FormGroup>
          </form>

          <div className='c-technology-panel__actions'>
            <Button onClick={ this.propagateConfirm } variant='flat'>
              Ok
            </Button>
            <Button onClick={ this.propagateDelete } variant='flat'>
              Remove
            </Button>
          </div>
        </ExpansionPanelBody>
      </ExpansionPanel>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private propagateValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    this.props.onValueChange(this.props.technology, target.name, target.value);
  }

  private propagateGroupValueChange = (event: React.ChangeEvent<HTMLSelectElement>, child: React.ReactNode) => {
    const target = event.target as HTMLSelectElement;
    this.props.onValueChange(this.props.technology, target.name, target.value);
  }

  private propagateToggle = (active: boolean) => {
    this.props.onToggle(this.props.technology, active);
  }

  private propagateConfirm = () => {
    this.props.onConfirm(this.props.technology);
  }

  private propagateDelete = () => {
    this.props.onDelete(this.props.technology);
  }
}
