
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { Fragment, PureComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { classNames, canUseDOM } from 'core/utils/dom';

import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'core/ui/components/Icon';

// ----------------------------------------------------------------------------- Configuration
export interface ModalProps {
  children: ReactNode;
  className?: string;
  open?: boolean;
  type?: 'sidebar';
  position?: 'document' | 'parent'; // defaults to 'document'
  onClose: (event: React.MouseEvent<HTMLElement>) => any;
  onCloseOutside?: (event: React.MouseEvent<HTMLElement>) => any;
}

// ----------------------------------------------------------------------------- Implementation
export class Modal extends PureComponent<ModalProps> {

  private rootClassName: string = 'c-modal';

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    // tslint:disable-next-line:no-console
    if (this.props.position !== 'parent' && (!canUseDOM() || document.getElementById('g-modal') === null)) {
      return null;
    }

    if (this.props.position === 'parent') {
      return this.renderDialog(this.props);
    }

    return createPortal(this.renderDialog(this.props), document.getElementById('g-modal'));
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderDialog(props: ModalProps) {
    const modifiers = [
      typeof this.props.type === 'string' && `c-modal--${ this.props.type }`,
      this.props.open && `c-modal--opened`
    ];

    return (
      <Fragment>
        {
          this.isShowBackdrop() && <div className='c-modal__backdrop' onClick={ this.props.onClose } />
        }
        <div className={ classNames(this.rootClassName, props.className, ...modifiers) }>
          <dialog className='c-modal__dialog' open={ Boolean(props.open) }>
            <nav className='c-modal__nav'>
              <Button onClick={ this.props.onClose }
                className='c-modal__nav-action c-modal__nav-action--close'
                variant='flat'>
                <Icon name='close' className='c-modal__nav-action-icon' />
              </Button>
            </nav>

            <section className='c-modal__content'>
              { props.children }
            </section>
          </dialog>
        </div>
      </Fragment>
    );
  }

  private isShowBackdrop(): boolean {
    return this.props.open && Boolean(this.props.onCloseOutside);
  }
}
