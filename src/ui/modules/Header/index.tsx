
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Button } from '@material-ui/core';
import { Classes } from 'jss';

import { ApplicationStateContext } from 'core/store';
import { consume, classNames, styled } from 'core/utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface HeaderProps {
  className?: string;
  classes?: Classes;
  logo?: string;
  title?: string;
  subtitle?: string;
  reset?: () => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { select: ['logo', 'title', 'subtitle', 'reset'] })
@styled(styles)
export class Header extends PureComponent<HeaderProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { logo, title, subtitle, reset, classes } = this.props;

    return (
      <header className={ classNames(classes.root, this.props.className) } onClick={ reset }>
        <Button className={ classes.headerAppTitle }
          variant='flat'
          color='inherit'
          TouchRippleProps={{
            root: classes.ripple,
          } as any}>
          { logo && (
            <img className={ classes.headerLogo } src={ logo } />
          )}
          <div className={ classes.headerName }>
            { title && (
              <h1 className={ classes.headerTitle }>
                { title }
              </h1>
            )}
            { subtitle && (
              <h2 className={ classes.headerSubtitle }>
                { subtitle }
              </h2>
            )}
          </div>
        </Button>
      </header>
    );
  }
}
