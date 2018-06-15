
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { Fragment, PureComponent, ReactNode } from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';

// ----------------------------------------------------------------------------- Configuration
export interface BottomSheetProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => any;
}

// ----------------------------------------------------------------------------- Implementation
export class BottomSheet extends PureComponent<BottomSheetProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [
      this.props.active && `c-bottom-sheet--active`
    ];

    return (
      <Fragment>
        <div className={ classNames('c-bottom-sheet', this.props.className, ...modifiers) }>
          <nav className='c-bottom-sheet__nav'>
            <Button onClick={ this.props.onClose }
              className='c-bottom-sheet__nav-action c-bottom-sheet__nav-action--close'
              variant='flat'>
              <Icon name='close' className='c-bottom-sheet__nav-action-icon' />
            </Button>
          </nav>

          <section className='c-bottom-sheet__content'>
            { this.props.children }
          </section>
        </div>
      </Fragment>
    );
  }
}
