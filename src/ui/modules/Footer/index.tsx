
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { ApplicationState, consume } from 'store';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface FooterProps {
  className?: string;
  applicationState?: ApplicationState;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationState, { bindTo: 'applicationState' })
@observer
export class Footer extends Component<FooterProps> {

  handlers: BoundHandlers = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { setEditMode } = this.props.applicationState;

    return (
      <footer className={ classNames('c-footer', this.props.className) }>
        <button
          className='c-footer__action c-footer__action--edit-mode'
          onClick={ this.bindEnableEditMode(setEditMode) }>
          Create your own
        </button>
      </footer>
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
