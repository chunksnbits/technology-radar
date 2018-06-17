
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent } from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsNavigationProps {
  className?: string;
  technologies: Technology[];
  selectedTechnology: Technology;
  onSelect: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyDetailsNavigation extends PureComponent<TechnologyDetailsNavigationProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];

    if (!this.props.selectedTechnology) {
      return null;
    }

    return (
      <div className={ classNames('c-technology-details-navigation', this.props.className, ...modifiers) }>
        <Button onClick={ this.propagateSelectPrevHandler }
          variant='flat'
          size='small'
          className='c-technology-details-navigation__action c-technology-details-navigation__action--prev'>
          <Icon name='navigate-prev'
            className='c-technology-details-navigation__action-icon' />
          { this.getPrev().name }
        </Button>
        <Button onClick={ this.propagateSelectNextHandler }
          variant='flat'
          size='small'
          className='c-technology-details-navigation__action c-technology-details-navigation__action--next'>
          { this.getNext().name }
          <Icon name='navigate-next'
            className='c-technology-details-navigation__action-icon' />
        </Button>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler function
  private propagateSelectPrevHandler = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onSelect(this.getPrev(), event)
  }

  private propagateSelectNextHandler = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onSelect(this.getNext(), event)
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private getNext(): Technology {
    let index = this.props.technologies.findIndex(acc => acc.id === this.props.selectedTechnology.id) + 1;

    if (index === this.props.technologies.length) {
      index = 0;
    }

    return this.props.technologies[index];
  }

  private getPrev(): Technology {
    let index = this.props.technologies.findIndex(acc => acc.id === this.props.selectedTechnology.id) - 1;

    if (index === -1) {
      index = this.props.technologies.length - 1;
    }

    return this.props.technologies[index];
  }
}
