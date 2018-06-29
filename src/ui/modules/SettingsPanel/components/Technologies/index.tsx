
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import { TechnologyPanel } from '../TechnologyPanel';

import './styles.scss';
import { Button } from '@material-ui/core';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologiesProps {
  className?: string;
  groups: Group[];
  technologies: Technology[];
  activeTechnology: Technology;

  onAdd: Function;
  onToggle: Function;
  onChange: Function;
  onConfirm: Function;
  onClear: Function;
  onDelete: Function;
}

interface TechnologiesState {
  activeTechnology: Technology;
}

// ----------------------------------------------------------------------------- Implementation
export class Technologies extends PureComponent<TechnologiesProps, TechnologiesState> {
  constructor(props: TechnologiesProps) {
    super(props);

    this.state = {
      activeTechnology: null
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <div className={ classNames('c-technologies', this.props.className) }>{
        this.props.technologies.map(technology =>
          <TechnologyPanel
            key={ technology.id }
            technology={ technology }
            groups={ this.props.groups }
            active={ this.isActive(technology, this.props.activeTechnology) }
            onConfirm={ this.props.onConfirm }
            onToggle={ this.props.onToggle }
            onValueChange={ this.props.onChange }
            onDelete={ this.props.onDelete } />
        )}

        <div className='c-technologies__actions'>
          <Button
            variant='raised'
            onClick={ this.props.onAdd as any }
            className='c-technologies__action c-technologies__action--add-technology'>
            Add technology
          </Button>

          <Button
            variant='raised'
            onClick={ this.props.onClear as any }
            className='c-technologies__action c-technologies__action--clear-all'>
            Clear all
          </Button>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private isActive(technology: Technology, activeTechnology: Technology): boolean {
    return Boolean(activeTechnology) && technology.id === activeTechnology.id;
  }
}
