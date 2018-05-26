
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
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
export class Header extends Component<HeaderProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { logo, title } = this.props.applicationState;

    return (
      <header className={ classNames('c-header', this.props.className) }>
        <div className='c-header__logo'>
          <img className='c-header__logo-image' src={ logo } />

          <h2 className='c-header__logo-title'>
            { title }
          </h2>
        </div>
      </header>
    );
  }
}
