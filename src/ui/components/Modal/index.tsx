
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { Fragment, PureComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@material-ui/core';
import { Classes } from 'jss';

import { styled, classNames, canUseDOM } from 'utils';

import { Icon } from '../Icon';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const MODAL_ID = 'modal-anchor';

export interface ModalProps {
  children?: ReactNode;
  classes?: Classes;
  className?: string;
  open?: boolean;
  type?: 'sidebar';
  position?: 'document' | 'parent'; // defaults to 'document'
  onClose: (event: React.MouseEvent<HTMLElement>) => any;
  onCloseOutside?: (event: React.MouseEvent<HTMLElement>) => any;
}

export function ModalRoot() {
  return <div id={ MODAL_ID } />;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class Modal extends PureComponent<ModalProps> {
  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const container = document.getElementById(MODAL_ID);

    // tslint:disable-next-line:no-console
    if (this.props.position !== 'parent' && (!canUseDOM() || container === null)) {
      return null;
    }

    if (this.props.position === 'parent') {
      return this.renderDialog(this.props);
    }

    return createPortal(this.renderDialog(this.props), container);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderDialog(props: ModalProps) {
    const { classes, open, onClose, type, children } = props;

    const modifiers = [
      typeof type === 'string' && `c-modal--${ type }`,
      open && classes.modalOpened,
    ];

    return (
      <Fragment>{
          this.isShowBackdrop() && <div className={ classes.modalBackdrop } onClick={ onClose } />
        }
        <div className={ classNames(classes.root, props.className, ...modifiers) }>
          <dialog className={ classes.modalDialog } open={ Boolean(props.open) }>
            <nav className={ classes.modalNav }>
              <Button onClick={ onClose }
                className={ classNames(classes.modalNavAction, classes.modalNavActionClose) }
                variant='flat'>
                <Icon name='close' className={ classes.modalNavActionIcon } />
              </Button>
            </nav>

            <section className={ classes.modalContent }>
              { children }
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
