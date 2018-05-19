
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { FormGroup } from 'ui/components/FormGroup';
import { observer } from 'mobx-react';

// ----------------------------------------------------------------------------- Configuration
export interface GroupPanelProps {
  className?: string;
  active: boolean;
  group: Group;

  children?: ReactNode;

  onToggleGroup: Function;
  onGroupValueChange: Function;
}

// ----------------------------------------------------------------------------- Implementation
@observer
export class GroupPanel extends Component<GroupPanelProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {

    const modifiers = [
      this.props.active && 'c-group-panel--active'
    ];

    return (
      <div className={ classNames('c-group-panel', this.props.className, ...modifiers) }>

        <button className='c-group-panel__header' onClick={ this.propagateToggle }>
          { this.props.group.name }(id: { this.props.group.id })
        </button>

        <div className='c-group-panel__body'>
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
              <input
                type='text'
                name='description'
                value={ this.props.group.description}
                onChange={ this.propagateValueChange } />
            </FormGroup>
          </form>
          <div className='c-group-panel__items'>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private propagateToggle = () => {
    return this.props.onToggleGroup(!this.props.active);
  }

  private propagateValueChange = (event: any) => {
    const target = event.target as HTMLInputElement;

    this.props.onGroupValueChange(this.props.group, target.name, target.value);
  }
}
