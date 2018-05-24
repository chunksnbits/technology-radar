
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
        onToggle={ this.props.onToggle }
        className={ classNames('c-technology-panel', this.props.className, ...modifiers) }>

        <ExpansionPanelHeader>
          { this.props.technology.name }
        </ExpansionPanelHeader>

        <ExpansionPanelBody>
          <form>
            <FormGroup label='Name'>
              <TextField
                type='text'
                name='name'
                fullWidth={ true }
                value={ this.props.technology.name}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Id'>
              <TextField
                type='text'
                name='id'
                fullWidth={ true }
                value={ this.props.technology.id}
                onChange={ this.propagateValueChange }
                disabled={ true } />
            </FormGroup>
            <FormGroup label='Group'>
              <Select
                value={ this.props.technology.groupId }
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
            <FormGroup label='Group'>
              <TextField
                type='number'
                name='level'
                fullWidth={ true }
                value={ this.props.technology.level}
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
                value={ this.props.technology.description}
                onChange={ this.propagateValueChange } />
            </FormGroup>
          </form>

          <div className='c-technology-panel__actions'>
            <Button onClick={ () => this.props.onDelete } color='primary' variant='raised'>
              remove
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
}
