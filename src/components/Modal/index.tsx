
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as React from 'react';

import { classNames, canUseDOM } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface ModalProps {
  children: ReactNode;
  className?: string;
  open?: boolean;
  onClose: () => any;
}

// ----------------------------------------------------------------------------- Implementation
export class Modal extends Component<ModalProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    if (!canUseDOM() || document.getElementById('g-modal') === null) {
      return null;
    }

    return createPortal(this.renderDialog(this.props), document.getElementById('g-modal'));
  }

  // ----------------------------------------------------------------------------- Event handler methods
  handleClose = () => {
    this.props.onClose();
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderDialog(props: ModalProps) {
    const modifiers = [];

    return (
      <dialog
        className={ classNames('c-modal', props.className, ...modifiers) }
        open={ Boolean(props.open) }>
        <nav className='c-modal__nav'>
          <button onClick={ this.handleClose } className='c-modal__nav-action c-modal__nav-action--close'>
            X
          </button>
        </nav>

        <section className='c-modal__content'>
          { props.children }
        </section>
      </dialog>
    );
  }
}
