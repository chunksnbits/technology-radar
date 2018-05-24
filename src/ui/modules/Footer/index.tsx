
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { ApplicationStateContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';

// ----------------------------------------------------------------------------- Configuration
export interface FooterProps {
  className?: string;
  applicationState?: ApplicationStateStore;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
export class Footer extends Component<FooterProps> {

  handlers: BoundHandlers = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <footer className={ classNames('c-footer', this.props.className) }>
        <Button
          variant='fab'
          className='c-footer__action c-footer__action--edit-mode'
          onClick={ this.bindEnableEditMode() }
          color='secondary'>
          <Icon name='add' />
        </Button>
      </footer>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private bindEnableEditMode() {
    if (!this.handlers.enableEdit) {
      this.handlers.enableEdit = () => this.props.applicationState.setEditMode(true);
    }

    return this.handlers.enableEdit as any;
  }
}
