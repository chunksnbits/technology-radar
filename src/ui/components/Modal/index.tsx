
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as React from 'react';

import { classNames, canUseDOM } from 'utils/dom';

import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';

// ----------------------------------------------------------------------------- Configuration
export interface ModalProps {
  children: ReactNode;
  className?: string;
  open?: boolean;
  type?: 'sidebar';
  position?: 'document' | 'parent'; // defaults to 'document'
  onClose: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class Modal extends Component<ModalProps> {

  private rootClassName: string = 'c-modal';
  private appClassName: string = 'c-app';

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentDidUpdate() {
    if (Boolean(this.props.open)) {
      document.addEventListener('click', this.handleDocumentClick);
    } else {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  render() {
    if (this.props.position !== 'parent' && (!canUseDOM() || document.getElementById('g-modal') === null)) {
      return null;
    }

    if (this.props.position === 'parent') {
      return this.renderDialog(this.props);
    }

    return createPortal(this.renderDialog(this.props), document.getElementById('g-modal'));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  // ----------------------------------------------------------------------------- Event handler methods
  handleClose = () => {
    this.props.onClose();
  }

  handleDocumentClick = (event: MouseEvent) => {
    const source = event.target as HTMLElement;

    if (!source.closest(`.${ this.appClassName }`)) {
      return;
    }

    if (!source.closest(`.${ this.rootClassName }`)) {
      this.props.onClose();
    }
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderDialog(props: ModalProps) {
    const modifiers = [
      typeof this.props.type === 'string' && `c-modal--${ this.props.type }`
    ];

    return (
      <dialog
        className={ classNames(this.rootClassName, props.className, ...modifiers) }
        open={ Boolean(props.open) }>
        <nav className='c-modal__nav'>
          <Button onClick={ this.handleClose }
            className='c-modal__nav-action c-modal__nav-action--close'
            variant='flat'>
            <Icon name='close' size={ 12 } />
          </Button>
        </nav>

        <section className='c-modal__content'>
          { props.children }
        </section>
      </dialog>
    );
  }
}
