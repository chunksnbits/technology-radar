
// ----------------------------------------------------------------------------- Dependencies
import { Component, ChangeEvent } from 'react';
import * as React from 'react';

import { Button } from '@material-ui/core';

import { classNames } from 'utils/dom';
import { FormGroup } from 'ui/components/FormGroup';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyPanelProps {
  className?: string;
  active: boolean;
  technology: Technology;

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
      <div className={ classNames('c-technology-panel', this.props.className, ...modifiers) }>

        <button className='c-technology-panel__header' onClick={ this.propagateToggle }>
          { this.props.technology.name }(id: { this.props.technology.id })
        </button>

        <div className='c-technology-panel__body'>
          <form>
            <FormGroup label='Name'>
              <input
                type='text'
                name='name'
                value={ this.props.technology.name}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Group'>
              <input
                type='text'
                name='group'
                value={ this.props.technology.groupId}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Group'>
              <input
                type='number'
                name='level'
                min='1'
                value={ this.props.technology.level}
                onChange={ this.propagateValueChange } />
            </FormGroup>
            <FormGroup label='Description'>
              <input
                type='text'
                name='description'
                value={ this.props.technology.description}
                onChange={ this.propagateValueChange } />
            </FormGroup>
          </form>

          <div className='c-technology-panel__actions'>
            <Button onClick={ () => this.props.onDelete } color='primary' variant='raised'>
              remove
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private propagateToggle = () => {
    return this.props.onToggle(!this.props.active);
  }

  private propagateValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    this.props.onValueChange(this.props.technology, target.name, target.value);
  }
}
