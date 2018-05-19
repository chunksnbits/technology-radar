
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { ApplicationState } from 'store/application-state';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface FooterProps {
  className?: string;
}

// ----------------------------------------------------------------------------- Implementation
export class Footer extends Component<FooterProps> {

  handlers: BoundHandlers = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <ApplicationState.Consumer>{ ({ setEditMode }) =>
        <footer className={ classNames('c-footer', this.props.className) }>
          <button
            className='c-footer__action c-footer__action--edit-mode'
            onClick={ this.bindEnableEditMode(setEditMode) }>
            Create your own
          </button>
        </footer>
      }</ApplicationState.Consumer>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private bindEnableEditMode(setEditMode: Function) {
    if (!this.handlers.enableEdit) {
      this.handlers.enableEdit = () => setEditMode(true);
    }

    return this.handlers.enableEdit as any;
  }
}
