
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Fragment, PureComponent, ReactNode } from 'react';

import { Classes } from 'jss';

import { classNames, styled } from 'utils';

import { Button } from '@material-ui/core';
import { Icon } from '../Icon';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface BottomSheetProps {
  children: ReactNode;
  className?: string;
  classes?: Classes;
  theme?: ApplicationTheme;
  active?: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => any;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class BottomSheet extends PureComponent<BottomSheetProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { classes, active, className, children, onClose } = this.props;

    const modifiers = [
      active && classes.rootActive,
    ];

    return (
      <Fragment>
        <div className={ classNames(classes.root, className, ...modifiers) }>
          <nav className={ classes.navigation }>
            <Button
              onClick={ onClose }
              className={ classNames(classes.navigationAction, classes.navgationActionClose) }
              variant='flat'>
              <Icon name='close' className={ classes.navigationActionIcon } />
            </Button>
          </nav>

          <section className={ classes.content }>
            { children }
          </section>
        </div>
      </Fragment>
    );
  }
}
