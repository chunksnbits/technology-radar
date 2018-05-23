
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
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
  onAddTechnology: Function;
  onTechnologyValueChange: Function;
  onClear: Function;
  onDelete: Function;
}

interface TechnologiesState {
  activeTechnology: Technology;
}

// ----------------------------------------------------------------------------- Implementation
export class Technologies extends Component<TechnologiesProps, TechnologiesState> {
  private handlers: BoundHandlers = {};

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
        this.props.technologies.map(technologie =>
          <TechnologyPanel
            key={ technologie.id }
            technology={ technologie }
            active={ this.state.activeTechnology === technologie }
            onToggle={ this.bindToggleActiveTechnology(technologie) }
            onValueChange={ this.props.onTechnologyValueChange }
            onDelete={ this.bindDelete(technologie) } />
        )}

        <div className='c-technologies__actions'>
          <Button
            variant='raised'
            onClick={ this.props.onAddTechnology as any }
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

  // ----------------------------------------------------------------------------- Event handler methods
  private bindToggleActiveTechnology(technology: Technology): Function {
    const name = `toggle-technology-${technology.id}`;

    if (!this.handlers[name]) {
      this.handlers[name] = (active: boolean) => {
        return this.setState({ activeTechnology: active ? technology : null });
      };
    }

    return this.handlers[name];
  }

  private bindDelete(technology: Technology): Function {
    const name = `delete-technology-${technology.id}`;

    if (!this.handlers[name]) {
      this.handlers[name] = (active: boolean) => {
        return this.props.onDelete(technology);
      };
    }

    return this.handlers[name];
  }
}
