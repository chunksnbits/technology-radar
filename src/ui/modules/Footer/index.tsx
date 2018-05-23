
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { ApplicationStateContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

import './styles.scss';

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
        <button
          className='c-footer__action c-footer__action--edit-mode'
          onClick={ this.bindEnableEditMode() }>
          Create your own
        </button>
      </footer>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private bindEnableEditMode() {
    console.log('+++ props', this.props.applicationState);
    if (!this.handlers.enableEdit) {
      this.handlers.enableEdit = () => this.props.applicationState.setEditMode(true);
    }

    return this.handlers.enableEdit as any;
  }
}
