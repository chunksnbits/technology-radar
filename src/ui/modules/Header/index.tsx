
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { ApplicationStateContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface HeaderProps {
  className?: string;
  applicationState?: ApplicationState;
}

// ----------------------------------------------------------------------------- Implementation
// tslint:disable-next-line:class-name
export class HeaderComponent extends Component<HeaderProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { logo, title } = this.props.applicationState;

    return (
      <header className={ classNames('c-header', this.props.className) }>
        <div className='c-header__app-title'>
          { logo && (
            <img className='c-header__logo' src={ logo } />
          )}
          { title && (
            <h2 className='c-header__title'>
              { title }
            </h2>
          )}
        </div>
      </header>
    );
  }
}

export const Header = consume(ApplicationStateContext, { bindTo: 'applicationState' })(HeaderComponent);
