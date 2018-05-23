
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import * as React from 'react';

import { Button } from '@material-ui/core';

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
  onDelete: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class GroupPanel extends Component<GroupPanelProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <ExpansionPanel
        active={ this.props.active }
        onToggle={ this.props.onToggle }
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
              <input
                type='text'
                name='name'
                value={ this.props.group.name}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Color'>
              <input
                type='text'
                name='color'
                value={ this.props.group.color}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Description'>
              <textarea
                name='description'
                value={ this.props.group.description}
                onChange={ this.propagateValueChange } />
            </FormGroup>
          </form>
          <div className='c-group-panel__actions'>
            <Button onClick={ () => this.props.onDelete } color='primary' variant='raised'>
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
}
