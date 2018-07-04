
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent } from 'react';

import { Classes } from 'jss';

import { Button } from '@material-ui/core';

import { classNames, styled } from 'core/utils';
import { Icon } from 'core/ui/components';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsNavigationProps {
  className?: string;
  classes?: Classes;
  technologies: Technology[];
  selectedTechnology: Technology;
  onSelect: (technology: Technology, event: React.MouseEvent<HTMLElement>) => any;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class TechnologyDetailsNavigation extends PureComponent<TechnologyDetailsNavigationProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { classes, className, selectedTechnology } = this.props;

    if (!selectedTechnology) {
      return null;
    }

    return (
      <div className={ classNames(classes.root, className) }>
        <Button onClick={ this.propagateSelectPrevHandler }
          variant='flat'
          size='small'
          className={ classNames(classes.technologyDetailsNavigationAction, classes.technologyDetailsNavigationActionPrev) }>
          <Icon name='navigate-prev'
            className={ classes.technologyDetailsNavigationActionIcon } />
          <span className={ classes.technologyDetailsNavigationActionLabel }>
            { this.getPrev().name }
          </span>
        </Button>
        <Button onClick={ this.propagateSelectNextHandler }
          variant='flat'
          size='small'
          className={ classNames(classes.technologyDetailsNavigationAction, classes.technologyDetailsNavigationActionNext) }>
          <span className={ classes.technologyDetailsNavigationActionLabel }>
            { this.getNext().name }
          </span>
          <Icon name='navigate-next'
            className={ classes.technologyDetailsNavigationActionIcon } />
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
