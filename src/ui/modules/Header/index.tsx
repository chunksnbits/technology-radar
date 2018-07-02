
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Button } from '@material-ui/core';

import { ApplicationStateContext } from 'core/store';

import { consume } from 'core/utils/store/consume';
import { classNames } from 'core/utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface HeaderProps {
  className?: string;
  logo?: string;
  title?: string;
  subtitle?: string;
  reset?: () => void;
}

// ----------------------------------------------------------------------------- Implementation
// tslint:disable-next-line:class-name
@consume(ApplicationStateContext, { select: ['logo', 'title', 'subtitle', 'reset'] })
export class Header extends PureComponent<HeaderProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { logo, title, subtitle, reset } = this.props;

    return (
      <header className={ classNames('c-header', this.props.className) } onClick={ reset }>
        <Button className='c-header__app-title' variant='flat'>
          { logo && (
            <img className='c-header__logo' src={ logo } />
          )}
          <div className='c-header__name'>
            { title && (
              <h1 className='c-header__title'>
                { title }
              </h1>
            )}
            { subtitle && (
              <h2 className='c-header__subtitle'>
                { subtitle }
              </h2>
            )}
          </div>
        </Button>
      </header>
    );
  }
}
