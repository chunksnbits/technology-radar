
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { Button } from '@material-ui/core';

import { ApplicationStateContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface HeaderProps {
  className?: string;
  applicationState?: ApplicationStateStore;
}

// ----------------------------------------------------------------------------- Implementation
// tslint:disable-next-line:class-name
export class HeaderComponent extends Component<HeaderProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { logo, title, subtitle, reset } = this.props.applicationState;

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

export const Header = consume(ApplicationStateContext, { bindTo: 'applicationState' })(HeaderComponent);
